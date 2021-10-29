import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import axios from "axios";

interface AuthProviderProps {
    children: ReactNode;
}

interface UserData {
    email: string;
    password: string;
}

interface AuthProviderData {
    authToken: string;
    signIn: (userData: UserData, history: History) => void;
    logout: (history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children}: AuthProviderProps) => {

    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("token") || ""
    );

    const signIn = (userData: UserData, history: History) => {
        axios
            .post("https://kenziehub.herokuapp.com/sessions", userData)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                setAuthToken(response.data.token)
                history.push("/dashboard")
            })
            .catch((err) => console.log(err))
    };

    const logout = (history: History) => {
        localStorage.clear();
        setAuthToken("");
        history.push("/");
    };

    return (
        <AuthContext.Provider value={{ authToken, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
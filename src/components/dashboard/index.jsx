import { useHistory } from "react-router";
import { useAuth } from "../../providers/auth";
import Button from "../Button"
import { DashboardContainer } from "./style";

export const Dashboard = () => {
    const {logout} = useAuth();
    const history = useHistory();

    return (
        <DashboardContainer>
            <h1>Seja Bem-Vindo!</h1>
            <Button onClick={() => logout(history)}>LOGOUT</Button>
        </DashboardContainer>
    )
}

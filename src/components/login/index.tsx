import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import * as yup from "yup";
import { useAuth } from "../../providers/auth";
import Button from "../Button";
import { LoginContainer } from "./style";

interface UserData {
    email: string;
    password: string;
}

export const Login = () => {
    const history = useHistory();

    const { signIn } = useAuth();

    const schema = yup.object().shape({
        email: yup.string().email().required("Campo obrigatório"),
        password: yup.string().min(6, "Mínimo de 6 dígitos").required("Campo obrigatório"),
    })

    const { register, handleSubmit, formState: {errors}} = useForm<UserData>({ resolver: yupResolver(schema)});

    const handleForm = (data: UserData) => {
        signIn(data, history);
    };

    return (
        <LoginContainer>
            <Paper style={{
                width:"400px",
                height:"350px",
            }}>
                <form onSubmit={handleSubmit(handleForm)}>
                    <TextField 
                        variant="outlined"
                        label="Email"
                        placeholder="Digite o nome"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField 
                        variant="outlined"
                        label="Senha"
                        placeholder="Digite a senha"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button type="submit">LOGIN</Button>
                </form>
            </Paper>
        </LoginContainer>
    )
}
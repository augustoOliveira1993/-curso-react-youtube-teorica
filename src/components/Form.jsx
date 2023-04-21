import { useState } from "react";

export const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`O usuário  ${nome} foi cadastrado com a senha ${password} e o e-mail ${email}`);
    }
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1>Meu cadastro:</h1>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
};

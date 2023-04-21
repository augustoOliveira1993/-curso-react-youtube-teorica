import {useState} from 'react';

export const Condicional = () => {
    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const enviarEmail = (event) => {
        event.preventDefault();
        setUserEmail(email);
        console.log('enviando email para: ', userEmail);
    }

    const limparEmail = () => {
        setUserEmail('');
    }
    return (
        <>
            <h2>Cadastre o seu E-mail:</h2>
            <form action="">
                <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button
                    type="submit"
                    onClick={enviarEmail}>
                    Enviar-email
                </button>
            </form>

            {userEmail && (
                <div>
                    <p>O email {userEmail} foi cadastrado com sucesso!</p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </>
    );
};

import {Button} from "./evento/Button.jsx";

export const Evento = ({numero}) => {
    const meuEvento = () => {
        console.log("Evento disparado, numero: " + numero);
    }

    const segundoEvento = () => {
        console.log("Segundo evento disparado, numero: " + numero);
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button text="Primeiro evento" event={meuEvento} />
            <Button text="Segundo evento" event={segundoEvento} />
        </>
    );
};

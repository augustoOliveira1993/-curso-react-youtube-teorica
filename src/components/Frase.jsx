import style from './Frase.module.css';

export const Frase = () => {
    return (
        <div className={style.fraseContainer}>
            <p className={style.fraseContent}>Este é um componente</p>
        </div>
    );
};

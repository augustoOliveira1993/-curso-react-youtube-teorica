export const Pessoa = ({name, idade, foto, profissao}) => {
    return (
        <>
            <img src={foto} alt={name}/>
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </>
    );
};

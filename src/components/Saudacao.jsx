export const Saudacao = ({ nome }) => {

    const gerarSaudacao = (algumNome) => {
        const hora = new Date().getHours();
        if (hora < 12) {
            return 'Saudação, Bom dia, ' + algumNome;
        } else if (hora < 18) {
            return 'Saudação, Boa tarde, ' + algumNome;
        } else {
            return 'Saudação, Boa noite, ' + algumNome;
        }
    }
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    );
};

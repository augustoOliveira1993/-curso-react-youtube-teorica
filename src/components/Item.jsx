import PropTypes from "prop-types";

export const Item = ({marca, ano_lancamento}) => {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
};

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired

}

Item.defaultProps = {
    marca: "Marca não informada",
    ano_lancamento: 0
}

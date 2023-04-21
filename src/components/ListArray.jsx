export const ListArray = ({ items }) => {
    return (
        <>
            <h3>Lista de produtos</h3>
            {items.length === 0 ? <p>Nenhum item encontrado</p> :
                items.map(item => {
                    return (
                        <div key={item.id}>
                            <p><strong>Nome:</strong> {item.nome}</p>
                            <p><strong>Valor:</strong>R$ {item.valor}</p>
                        </div>
                    )
                })
            }
        </>
    );
};

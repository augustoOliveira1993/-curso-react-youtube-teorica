import {Item} from './Item'

export const List = () => {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca="Ferrari" ano_lancamento={1993} />
               <Item marca="Fiat" ano_lancamento={1964} />
               <Item marca="Reundai" ano_lancamento={1987} />
               <Item />
            </ul>
        </>
    );
};

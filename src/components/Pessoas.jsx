import Pessoa from './Pessoa';


function Pessoas({ items }) {
    return (
        <>
            <h3>Pessoas cadastradas: </h3>
            {items.length > 0 ? items.map((item, index) => (
                <Pessoa nome={item.nome} idade={item.idade} profisssao={item.profisssao} about={item.about} key={index} />
            )) : (<p>Não há pessoas cadastradas </p>)}
        </>
    )
}

export default Pessoas;
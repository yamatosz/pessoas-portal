import styles from './Pessoa.module.css'

function Pessoa({ nome, foto, idade, profissao, about }) {
    return (
        <div className={styles.pessoaContainer}>
            <h2>Nome: {nome}</h2>
            <img src={foto} alt={nome} />
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Sobre mim: {about}</p>
        </div>
    )
}

Pessoa.defaultProps = {
    nome: "Sem nome",
    idade: 0,
    profisssao: "Sem profissão",
    about: "Sem infos",
}

export default Pessoa;
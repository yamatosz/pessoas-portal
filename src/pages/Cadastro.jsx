import CadastroForm from '../cadastro/CadastroForm';
import styles from './Cadastro.module.css'

function Cadastro() {
    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastro</h1>
            <p>Crie seu cadastro!</p>
            <CadastroForm />
        </div>

    );
}

export default Cadastro;
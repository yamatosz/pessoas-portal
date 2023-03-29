import CadastroForm from '../cadastro/CadastroForm';
import styles from './Cadastro.module.css';
// import { useHistory } from 'react-router-dom';

function Cadastro() {

    // const history = useHistory()

    function createPost(cadastro) {
        fetch("http://localhost:5000/pessoas", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
        }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastro</h1>
            <p>Crie seu cadastro!</p>
            <CadastroForm handleSubmit={createPost} />
        </div>

    );
}

export default Cadastro;
import styles from './Home.module.css';
import peoples from '../imgs/home.jpg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Portal Pessoas</span></h1>
            <p>Faça seu cadastro agora mesmo!!</p>
            <LinkButton to='/cadastro' text="Cadastre-se" />
            <img src={peoples} alt="Pessoas" />

        </section>
    )
}

export default Home;
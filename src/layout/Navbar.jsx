import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../imgs/logo.png';


function Navbar() {
    return (
        <nav className={styles.nav_list}>
            <img src={logo} alt="logo" />
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/cadastro">Cadastro</Link></li>
                <li className={styles.item}><Link to="/portal">Portal</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar;
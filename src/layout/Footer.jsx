import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedin /></li>
                <li><FaWhatsapp /></li>
            </ul>
            <p>
                <span>&copy; 2023</span>
            </p>
        </footer>
    )
}

export default Footer;
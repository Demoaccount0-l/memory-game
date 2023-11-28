import Styles from './Footer.module.css'
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className={Styles.footer_section}>
                <p>Likhitha Vakalapudi ©</p>
                <a href="https://github.com/Demoaccount0-l" rel="noreferrer" target="_blank" className={Styles.link}>
                    <FaGithub className={Styles.icon} style={{fill: 'white'}}/>
                </a>
            </footer>
        </>
    )
}

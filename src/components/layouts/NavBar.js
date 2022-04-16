import { Link } from 'react-router-dom';
import Container from './Container.js';
import styles from './NavBar.module.css';
import logo from '../../img/costs_logo.png';

export default function NavBar() {
        return <>
            <nav className={styles.navBar}> 
                <Container>
                    <Link to="/"><img src={logo} alt="Costs"/></Link>
                        
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Company">Empresa</Link>
                        </li >
                        <li className={styles.item}>
                            <Link to="/Contact">Contato</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
}
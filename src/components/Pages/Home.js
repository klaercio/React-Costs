import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layouts/LinkButton.js';

export default function Home() {
    return (
        <section className={styles.home__container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Começa a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/NewProject' text="Criar projeto"></LinkButton>
            <img src={savings} alt="Costs"/>
        </section>    
    );
}
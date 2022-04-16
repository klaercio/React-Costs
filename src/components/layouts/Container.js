import styles from './Container.module.css'

export default function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
}

//Como seria a implementação de estilos em React-Native
/* const styles = new StyleSheet(
    {
        container: {
            width: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 auto',
            flexWrap: 'wrap',
        },
        minHeigth: {

        }
    }
) */
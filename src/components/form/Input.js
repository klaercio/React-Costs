import styles from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value}) {
    return <>
        <div className={styles.form__control}>
            <label htmlFor={name}>{text}</label>
            <input id={name} type={type} name={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    </>
}
import styles from "./Wrapper.module.scss"

export default function Wrapper({ children }) {
    return (
        <div id="wrapper" className={styles.wrapper}>
            {children}
        </div>
    )
}
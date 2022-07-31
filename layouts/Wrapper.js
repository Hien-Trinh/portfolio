import styles from "./Wrapper.module.scss"
import UseScrollPageTransition from "../lib/UseScrollPageTransition"

export default function Wrapper({ children }) {
    UseScrollPageTransition()

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}

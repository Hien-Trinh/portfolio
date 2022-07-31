import styles from "./Wrapper.module.scss"
import useScrollPageTransition from "../lib/UseScrollPageTransition"

export default function Wrapper({ children }) {
    useScrollPageTransition()

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}

import styles from "./ShowMoreButton.module.scss"
import Link from "react"

export default function ShowMoreButton({ mouseParallaxTitle }) {
    return (
        <div className={styles.container} style={mouseParallaxTitle}>
            <button className={styles.button}>Show more</button>
        </div>
    )
}
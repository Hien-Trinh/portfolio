import styles from "./ShowMoreButton.module.scss"
import Link from "react"

export default function ShowMoreButton() {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Show more</button>
        </div>
    )
}
import styles from "./ShowMoreButton.module.scss"
import Link from "next/link"

export default function ShowMoreButton({ mouseParallaxTitle, handleClick }) {
    return (
        <Link href="/about"><button className={styles.button} style={mouseParallaxTitle}>Show more</button></Link>
    )
}

import styles from "./ShowMoreButton.module.scss"

export default function ShowMoreButton({ mouseParallaxTitle }) {
    return (
        <button className={styles.button} style={mouseParallaxTitle}>Show more</button>
    )
}

import styles from "./ShowMoreButton.module.scss"

export default function ShowMoreButton({ mouseParallaxTitle, handleClick }) {
    return (
        <button className={styles.button} style={mouseParallaxTitle} onClick={handleClick}>Show more</button>
    )
}

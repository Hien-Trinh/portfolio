import styles from "./AboutMeExtended.module.scss"

export default function AboutMeExtended({isActive}) {
    return (
        <div className={`${styles.backdrop} ${isActive ? styles.active : null}`}></div>
    )
}
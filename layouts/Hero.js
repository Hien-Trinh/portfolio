import styles from "./Hero.module.scss"

export default function Hero({ top, title, inView }) {
    return (
        <div className={styles.hero} style={{ top: `${top}` }}>
            <div className={`${styles.title} ${inView ? styles.active : null}`}>
                {title}
            </div>
        </div>
    )
}

import styles from "./Hero.module.scss"

export default function Hero({ title, inView }) {
    return (
        <div className={styles.hero}>
            <div className={`${styles.title} ${inView ? styles.active : null}`}>
                {title}
            </div>
        </div>
    )
}

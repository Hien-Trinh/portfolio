import styles from "./TransitionLayer.module.scss"

export default function TransitionLayer({ isActive }) {
    return (
        <div>
            <div
                className={`${styles.rightLayer} ${
                    isActive ? styles.active : null
                }`}
            ></div>
            <div
                className={`${styles.rightLayer} ${styles.rightLayer2} ${
                    isActive ? styles.active : null
                }`}
            ></div>
            <div
                className={`${styles.rightLayer} ${styles.rightLayer3} ${
                    isActive ? styles.active : null
                }`}
            ></div>
        </div>
    )
}

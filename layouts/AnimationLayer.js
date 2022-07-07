import styles from "./AnimationLayer.module.scss"

export default function AnimationLayer({ isActive }) {
    return (
        <div>
            <div className={`${styles.leftLayer} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.leftLayer} ${styles.leftLayer2} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.leftLayer} ${styles.leftLayer3} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.leftLayer} ${styles.leftLayer4} ${isActive ? styles.active : null}`}></div>
        </div>
    )
}
import styles from './ShootingStarsArt.module.scss'

export default function ShootingStarsArt() {
    return (
        <div className={styles.body}>
            <div className={styles.night}>
                {[...Array(20)].map(function(_, i){
                    return <div className={styles.shooting_star} key={i}></div>
                })}
            </div>
        </div>
    )
}
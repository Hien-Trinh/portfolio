import styles from './HamburgerMenu.module.scss'
import { useState } from 'react'

export default function HamburgerMenu() {
    const [isActive, setActive] = useState(false)

    function handleClick() {
        setActive(!isActive)
    }

    return (
        <div className={`menu ${styles.btn1} ${isActive ? styles.open : null}`} onClick={handleClick}>
            <div className={styles.icon}></div>
        </div>
    )
}
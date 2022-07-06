import styles from './HamburgerMenu.module.scss'
import { useState } from 'react'
import disableScroll from 'disable-scroll'

export default function HamburgerMenu() {
    const [isActive, setActive] = useState(false)

    function handleClick() {
        setActive(!isActive)
        isActive ? disableScroll.off() : disableScroll.on()
    }

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className={`${styles.rightLayer} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.rightLayer} ${styles.rightLayer2} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.rightLayer} ${styles.rightLayer3} ${isActive ? styles.active : null}`}></div>
            <div className={`${styles.rightLayer} ${styles.menu} ${isActive ? styles.active : null}`}>
                <ul className="text-white text-6xl relative top-44 left-[12.5%]">
                    <li className="my-2 py-4">
                        <button className={`${isActive ? styles.bounceIn : null}`} href="#home">Home</button>
                    </li>
                    <li className="my-2 py-4">
                        <button className={`${isActive ? `${styles.bounceIn} ${styles.bounceIn2}` : null}`} href="#about">About</button>
                    </li>
                    <li className="my-2 py-4">
                        <button className={`${isActive ? `${styles.bounceIn} ${styles.bounceIn3}` : null}`} href="#projects">Projects</button>
                    </li>
                    <li className="my-2 py-4">
                        <button className={`${isActive ? `${styles.bounceIn} ${styles.bounceIn4}` : null}`} href="#contact">Contact</button>
                    </li>
                </ul>
            </div>
            <div className={`${styles.btn1} ${isActive ? styles.open : null}`} onClick={handleClick}>
                <div className={styles.icon}></div>
            </div>
        </div>
    )
}
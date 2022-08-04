import styles from './HamburgerMenu.module.scss'
import { useState } from 'react'
import TransitionLayer from '../layouts/TransitionLayer'
import AnimationLayer from '../layouts/AnimationLayer'
import useSetScrollPosition from '../lib/UseSetScrollPosition'

export default function HamburgerMenu() {
    const [isClick, setClick] = useState(false)
    const [isHover1, setHover1] = useState(false)
    const [isHover2, setHover2] = useState(false)
    const [isHover3, setHover3] = useState(false)
    const [isHover4, setHover4] = useState(false)

    function handleHamburgerClick() {
        setClick(!isClick)
    }

    function HandlePageClick(pageNum) {
        setClick(!isClick)
        useSetScrollPosition(pageNum)
    }
 
    return (
        <div className="w-screen">
            <TransitionLayer isActive={isClick} />
            <div className={`${styles.menu} ${isClick ? styles.active : null}`}>
                <ul className="text-white text-6xl relative top-44 left-[12.5%] w-3/4 overflow-hidden">
                    <li className="my-6">
                        <AnimationLayer isActive={isHover1} />
                        <button className={`w-full py-2 text-left ${isClick ? styles.bounceIn : null}`} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} onClick={() => HandlePageClick(0)}>Home</button>
                    </li>
                    <li className="my-6">
                        <AnimationLayer isActive={isHover2} />
                        <button className={`w-full py-2 text-left ${isClick ? `${styles.bounceIn} ${styles.bounceIn2}` : null}`} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} onClick={() => {HandlePageClick(1)}}>About</button>
                    </li>
                    <li className="my-6">
                        <AnimationLayer isActive={isHover3} />
                        <button className={`w-full py-2 text-left ${isClick ? `${styles.bounceIn} ${styles.bounceIn3}` : null}`} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} onClick={() => {HandlePageClick(2)}}>Projects</button>
                    </li>
                    <li className="my-6">
                        <AnimationLayer isActive={isHover4} />
                        <button className={`w-full py-2 text-left ${isClick ? `${styles.bounceIn} ${styles.bounceIn4}` : null}`} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} onClick={() => {HandlePageClick(3)}}>Contact</button>
                    </li>
                </ul>
            </div>
            <div className={`${styles.hamburger} ${isClick ? styles.open : null}`} onClick={handleHamburgerClick}>
                <div className={styles.icon}></div>
            </div>
        </div>
        
    )
}
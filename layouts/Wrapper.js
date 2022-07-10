import styles from "./Wrapper.module.scss"
import { useEffect } from "react"
import useScrollMove from "../lib/UseScrollMove"
import enableScroll from "../lib/ScrollDisable"

export default function Wrapper({ children }) {
    const scrollY = useScrollMove()
    const inScroll = scrollY == 0 || scrollY == 795

    useEffect(() => {
        !inScroll ? enableScroll(false) : enableScroll(true)
        console.log(inScroll)
    }, [inScroll])

    return (
        <div id="wrapper" className={styles.wrapper}>
            {children}
        </div>
    )
}
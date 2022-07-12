import styles from "./Wrapper.module.scss"
import { useEffect, useState } from "react"
import useScrollMove from "../lib/UseScrollMove"
import enableScroll from "../lib/ScrollDisable"

export default function Wrapper({ children }) {
    const [inScroll, setInScroll] = useState(false)
    const scrollY = useScrollMove()

    useEffect(() => {
        const element = document.getElementById("wrap")
        setInScroll((scrollY == 0 || scrollY == element.clientHeight))
    }, [scrollY])

    useEffect(() => {
        inScroll ? enableScroll(true) : enableScroll(false)
    }, [inScroll])

    return (
        <div id="wrap" className={styles.wrapper}>
            { children }
        </div>
    )
}
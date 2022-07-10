import styles from "./Wrapper.module.scss"
import { useEffect, useState } from "react"
import useScrollMove from "../lib/UseScrollMove"
import enableScroll from "../lib/ScrollDisable"

export default function Wrapper({ children }) {
    const [inScroll, setInScroll] = useState(false)
    const scrollY = useScrollMove()

    useEffect(() => {
        setInScroll(scrollY == 0 || scrollY == 795)
        console.log("true")
    }, [scrollY])

    useEffect(() => {
        !inScroll ? enableScroll(false) : enableScroll(true)
        console.log(inScroll)
    }, [inScroll])

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}
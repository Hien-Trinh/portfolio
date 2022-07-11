import styles from "./Wrapper.module.scss"
import { useEffect, useState } from "react"
import useScrollMove from "../lib/UseScrollMove"
import enableScroll from "../lib/ScrollDisable"

export default function Wrapper({ children }) {
    const scrollY = useScrollMove()
    const inScroll = (scrollY == 0 || scrollY == 795)

    useEffect(() => {
        inScroll ? enableScroll(true) : enableScroll(false)
        console.log("setInScroll")
    }, [inScroll])

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}
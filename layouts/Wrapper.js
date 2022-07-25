import styles from "./Wrapper.module.scss"
import { useEffect, useState, useRef } from "react"
import useScrollMove from "../lib/UseScrollMove"
import enableScroll from "../lib/ScrollDisable"
import Scrollbar from "smooth-scrollbar"

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

export default function Wrapper({ children }) {
    const [inScroll, setInScroll] = useState(false)
    const scrollY = useScrollMove()
    const prevScrollY = usePrevious(scrollY)

    useEffect(() => {
        const element = document.getElementById("wrap")
        const scrollbar = Scrollbar.get(document.getElementById("wrap"))

        if (scrollY - prevScrollY > 0) {
            scrollbar.scrollTo(0, 795, 1000)
        } else if (scrollY - prevScrollY < 0) {
            scrollbar.scrollTo(0, 0, 1000)
        }
        setInScroll(scrollY === 0 || scrollY === element.clientHeight)
    }, [scrollY])

    useEffect(() => {
        inScroll ? enableScroll(true) : enableScroll(false)
    }, [inScroll])

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}

import styles from "./Wrapper.module.scss"
import { useEffect, useState, useRef } from "react"
import useScrollMove from "../lib/UseScrollMove"
import Scrollbar from "smooth-scrollbar"

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

export default function Wrapper({ children }) {
    const scrollY = useScrollMove()
    const prevScrollY = usePrevious(scrollY)

    useEffect(() => {
        const element = document.getElementById("wrap")
        const scrollbar = Scrollbar.get(document.getElementById("wrap"))

        const home = document.getElementById("home")
        const about = document.getElementById("about")

        if (scrollY - prevScrollY > 0) {
            scrollbar.scrollIntoView(about)
        } else if (scrollY - prevScrollY < 0) {
            scrollbar.scrollIntoView(home)
        }
    }, [scrollY])

    return (
        <div id="wrap" className={styles.wrapper}>
            {children}
        </div>
    )
}

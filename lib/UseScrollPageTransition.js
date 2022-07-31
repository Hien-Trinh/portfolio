import { useState, useEffect, useRef } from 'react'
import useScrollMove from "../lib/UseScrollMove"
import Scrollbar from "smooth-scrollbar"

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

const UseScrollPageTransition = () => {
    const scrollY = useScrollMove()
    const prevScrollY = usePrevious(scrollY)

    useEffect(() => {
        const scrollbar = Scrollbar.get(document.getElementById("wrap"))

        const home = document.getElementById("home")
        const about = document.getElementById("about")

        const pages = [home, about]

        if (scrollY - prevScrollY > 0) {
            scrollbar.scrollIntoView(pages[1])
        } else if (scrollY - prevScrollY < 0) {
            scrollbar.scrollIntoView(pages[0])
        }
    }, [scrollY])

    return
}

export default UseScrollPageTransition

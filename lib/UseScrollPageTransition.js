import { useEffect, useRef } from "react"
import useScrollMove from "../lib/UseScrollMove"
import Scrollbar from "smooth-scrollbar"

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

const useScrollPageTransition = () => {
    const scrollY = useScrollMove()
    const prevScrollY = usePrevious(scrollY)

    useEffect(() => {
        const scrollbar = Scrollbar.get(document.getElementById("wrap"))

        const home = document.getElementById("home")
        const about = document.getElementById("about")

        const pages = [home, about]
        const pageNum = Math.floor(scrollY / window.innerHeight)

        if (scrollY - prevScrollY > 0) {
            scrollbar.scrollIntoView(
                pages[pageNum < pages.length - 1 ? pageNum + 1 : pageNum]
            )
        } else if (scrollY - prevScrollY < 0) {
            scrollbar.scrollIntoView(
                pages[pageNum > 0 ? pageNum - 1 : pageNum]
            )
        }
    }, [scrollY, prevScrollY])

    return
}

export default useScrollPageTransition

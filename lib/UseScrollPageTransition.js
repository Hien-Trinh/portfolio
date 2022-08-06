import { useEffect, useRef, useState } from "react"
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
    const [pageNum, setPageNum] = useState(0)
    const scrollY = useScrollMove()
    const prevScrollY = usePrevious(scrollY)

    useEffect(() => {
        const nextPage = pageNum < 2 ? pageNum + 1 : pageNum
        const prevPage = pageNum > 0 ? pageNum - 1 : pageNum

        const threshold = window.innerHeight * pageNum

        if (prevScrollY !== threshold) {
            console.log(prevScrollY, threshold)
            return
        }

        if (scrollY > prevScrollY) {
            setPageNum(nextPage)
        } else if (scrollY < prevScrollY) {
            setPageNum(prevPage)
        }
    }, [scrollY, prevScrollY])

    useEffect(() => {
        const scrollbar = Scrollbar.get(document.getElementById("wrap"))

        const home = document.getElementById("home")
        const about = document.getElementById("about")
        const projects = document.getElementById("projects")

        const pages = [home, about, projects]

        scrollbar.scrollIntoView(pages[pageNum])

    }, [scrollY, prevScrollY])

    return
}

export default useScrollPageTransition

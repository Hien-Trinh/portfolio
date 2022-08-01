import { useEffect, useState } from "react"
import useScrollMove from "../lib/UseScrollMove"

const getInView = (pageNum) => {
    const [pageLimitTop, setPageLimitTop] = useState(0)
    const [pageLimitBottom, setPageLimitBottom] = useState(0)
    const scrollY = useScrollMove()

    useEffect(() => {
        const element = document.getElementById("wrap")
        const elementHeight = element.clientHeight

        setPageLimitTop(elementHeight / 2 + elementHeight * (pageNum - 1))
        setPageLimitBottom(elementHeight / 2 + elementHeight * pageNum)
    }, [])

    const inView = scrollY < pageLimitBottom && scrollY > pageLimitTop

    return inView
}

export default getInView

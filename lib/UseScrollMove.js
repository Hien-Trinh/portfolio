import { useState, useEffect } from "react"
import Scrollbar from "smooth-scrollbar"

const useScrollMove = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const wrap = document.getElementById("wrap")
        const scrollbar = Scrollbar.init(wrap, {
            damping: 0.05,
            renderByPixels: true,
        })

        scrollbar.size = {
            container: {
                width: wrap.clientWidth,
                height: wrap.clientHeight,
            },
            content: {
                width: wrap.clientWidth,
                height: wrap.scrollHeight,
            },
        }

        const handler = () => {
            setScrollY(scrollbar.scrollTop)
        }

        scrollbar.addListener(handler)
        return () => {
            scrollbar.removeListener(handler)
        }
    }, [scrollY])

    return scrollY
}

export default useScrollMove

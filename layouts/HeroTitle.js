import styles from "./HeroTitle.module.scss"
import { useEffect, useState } from "react"
import useMouseMove from '../lib/UseMouseMove'
import useScrollMove from '../lib/UseScrollMove'

export default function HeroTitle({ title, pageNum }) {
    const [pageLimitTop, setPageLimitTop] = useState(0)
    const [pageLimitBottom, setPageLimitBottom] = useState(0)
    const [x, y] = useMouseMove()
    const scrollY = useScrollMove()

    useEffect(() => {
        const element = document.getElementById("wrap")
        setPageLimitTop(element.clientHeight / 2 + element.clientHeight * (pageNum - 1))
        setPageLimitBottom(element.clientHeight / 2 + element.clientHeight * pageNum)
    }, [])
    
    const inFrame = (scrollY < pageLimitBottom && scrollY > pageLimitTop)

    return (
        <div className="absolute w-max h-max left-[15%] top-52 overflow-hidden">
            <div className={`${styles.title} ${inFrame ? styles.active : null}`}>
                <p className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>
                    { title }
                </p>
            </div>
        </div>
    )
}
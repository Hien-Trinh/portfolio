import styles from "./Hero.module.scss"
import { useEffect, useState } from "react"
import useScrollMove from '../lib/UseScrollMove'

export default function Hero({ title, pageNum }) {
    const [pageHeight, setPageHeight] = useState(0)
    const [pageLimitTop, setPageLimitTop] = useState(0)
    const [pageLimitBottom, setPageLimitBottom] = useState(0)
    const scrollY = useScrollMove()

    useEffect(() => {
        const element = document.getElementById("wrap")
        const elementHeight = element.clientHeight
        setPageHeight(elementHeight)
        setPageLimitTop(elementHeight / 2 + elementHeight * (pageNum - 1))
        setPageLimitBottom(elementHeight / 2 + elementHeight * pageNum)
    }, [])
    
    const inFrame = (scrollY < pageLimitBottom && scrollY > pageLimitTop)

    return (
        <div className={styles.hero} style={{ top: `${208 + pageHeight * pageNum}px` }}>
            <div className={`${styles.title} ${inFrame ? styles.active : null}`}>
                { title }
            </div>
        </div>
    )
}
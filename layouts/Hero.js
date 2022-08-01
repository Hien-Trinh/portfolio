import styles from "./Hero.module.scss"
import { useEffect, useState } from "react"
import getInView from "../lib/GetInView"

export default function Hero({ title, pageNum }) {
    const [pageHeight, setPageHeight] = useState(0)
    const inView = getInView(pageNum)

    useEffect(() => {
        const element = document.getElementById("wrap")
        setPageHeight(element.clientHeight)
    }, [])

    return (
        <div
            className={styles.hero}
            style={{ top: `${208 + pageHeight * pageNum}px` }}
        >
            <div className={`${styles.title} ${inView ? styles.active : null}`}>
                {title}
            </div>
        </div>
    )
}

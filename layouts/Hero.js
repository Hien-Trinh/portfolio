import styles from "./Hero.module.scss"
import { useEffect, useState } from "react"

export default function Hero({ title, pageNum, inView }) {
    const [pageHeight, setPageHeight] = useState(0)

    useEffect(() => {
        const element = document.getElementById("wrap")
        setPageHeight(element.clientHeight)
    })

    return (
        <div
            className={styles.hero}
            style={{ top: `${pageHeight * .35}px` }}
        >
            <div className={`${styles.title} ${inView ? styles.active : null}`}>
                {title}
            </div>
        </div>
    )
}

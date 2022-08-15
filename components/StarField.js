import styles from "./StarField.module.css"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"

export default function StarField({ children }) {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()

    return (
        <div>
            <div
                style={{
                    transform: `translate3d(${(x - pageWidth / 2) / 40}px, ${
                        (y - pageHeight / 2) / 40
                    }px, 0px)`,
                    position: "fixed",
                }}
            >
                <div className={styles.stars}></div>
            </div>
            <div
                style={{
                    transform: `translate3d(${(x - pageWidth / 2) / 30}px, ${
                        (y - pageHeight / 2) / 30
                    }px, 0px)`,
                    position: "fixed",
                }}
            >
                <div className={styles.stars2}></div>
            </div>
            <div
                style={{
                    transform: `translate3d(${(x - pageWidth / 2) / 20}px, ${
                        (y - pageHeight / 2) / 20
                    }px, 0px)`,
                    position: "fixed",
                }}
            >
                <div className={styles.stars3}></div>
            </div>
            {children}
        </div>
    )
}

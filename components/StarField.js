import styles from "./StarField.module.css"
import useMouseMove from "../lib/UseMouseMove"

export default function StarField({ children }) {
    const [x, y] = useMouseMove()

    return (
        <div>
            <div
                style={{
                    transform: `translate3d(${(x - 720) / 40}px, ${
                        (y - 397.5) / 40
                    }px, 0px)`,
                    position: "fixed",
                }}
            >
                <div className={styles.stars}></div>
            </div>
            <div
                style={{
                    transform: `translate3d(${(x - 720) / 30}px, ${
                        (y - 397.5) / 30
                    }px, 0px)`,
                    position: "fixed",
                }}
            >
                <div className={styles.stars2}></div>
            </div>
            <div
                style={{
                    transform: `translate3d(${(x - 720) / 20}px, ${
                        (y - 397.5) / 20
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

import styles from "./Projects.module.scss"
import { useState } from "react"
import Image from "next/image"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"
import GetInView from "../lib/GetInView"

import bg_project_1 from "../public/images/bg_project_1.png"
import bg_project_2 from "../public/images/bg_project_2.png"
import bg_project_3 from "../public/images/bg_project_3.png"

export default function Projects() {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()
    const [active, setActive] = useState(false)

    const pageNum = 2
    const title = "projects"
    const inView = GetInView(pageNum)

    const mouseParallaxTitle = {
        transform: `translate3d(${(x - pageWidth / 2) / 40}px, ${
            (y - pageHeight / 2) / 40
        }px, 0px)`,
    }

    const mouseParallaxButton = {
        transform: `translate3d(${(x - pageWidth / 2) / 60}px, ${
            (y - pageHeight / 2) / 60
        }px, 0px)`,
    }

    const mouseParallax1 = {
        transform: `translate3d(${(x - pageWidth / 2) / -35}px, ${
            (y - pageHeight / 2) / -35
        }px, 0px)`,
    }

    const mouseParallax2 = {
        transform: `translate3d(${(x - pageWidth / 2) / -50}px, ${
            (y - pageHeight / 2) / -50
        }px, 0px)`,
    }

    const mouseParallax3 = {
        transform: `translate3d(${(x - pageWidth / 2) / -80}px, ${
            (y - pageHeight / 2) / -80
        }px, 0px)`,
    }

    return (
        <div
            id="projects"
            className="flex justify-center items-center relative h-screen w-screen bg-transparent"
        >
            <div className="absolute grid place-items-center w-[1280px] h-[720px]">
                <div
                    className={`${styles.bg1} ${
                        inView ? styles.inView : null
                    } ${active ? styles.active : null}`}
                    style={mouseParallax1}
                >
                    <Image
                        src={bg_project_1}
                        alt="bg_project_1"
                        layout="fixed"
                        width={720}
                        height={720}
                    />
                </div>
                <div
                    className={`${styles.bg2} ${
                        inView ? styles.inView : null
                    } ${active ? styles.active : null}`}
                    style={mouseParallax2}
                >
                    <Image
                        src={bg_project_2}
                        alt="bg_project_2"
                        layout="fixed"
                        width={720}
                        height={720}
                    />
                </div>
                <div
                    className={`${styles.bg3} ${
                        inView ? styles.inView : null
                    } ${active ? styles.active : null}`}
                    style={mouseParallax3}
                >
                    <Image
                        src={bg_project_3}
                        alt="bg_project_3"
                        layout="fixed"
                        width={720}
                        height={720}
                    />
                </div>
            </div>
            <div
                className={`${styles.backdrop} ${
                    active ? styles.active : null
                }`}
            ></div>
            <div className="absolute w-[1280px] h-[720px] flex items-center justify-center">
                <div
                    className={`${styles.hero} ${
                        active ? styles.active : null
                    }`}
                >
                    <div
                        className={`${styles.title} ${
                            inView ? styles.inView : null
                        }`}
                    >
                        <p style={mouseParallaxTitle}>{title}</p>
                    </div>
                </div>
            </div>
            <div className={styles.textbox}>
                <button
                    className={`${styles.button} ${
                        active ? styles.active : null
                    }`}
                    style={mouseParallaxButton}
                    onClick={() => setActive(!active)}
                >
                    {active ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
    )
}

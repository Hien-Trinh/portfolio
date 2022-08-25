import styles from "./AboutMe.module.scss"
import { useState } from "react"
import Image from "next/image"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"
import GetInView from "../lib/GetInView"

import bg_about_base_1 from "../public/images/bg_about_base_1.png"
import bg_about_base_2 from "../public/images/bg_about_base_2.png"
import bg_about_base_3 from "../public/images/bg_about_base_3.png"
import bg_about_top_1 from "../public/images/bg_about_top_1.png"
import bg_about_top_2 from "../public/images/bg_about_top_2.png"
import bg_about_top_3 from "../public/images/bg_about_top_3.png"

export default function AboutMe() {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()
    const [aboutMe, setAboutMe] = useState(false)

    const pageNum = 1
    const title = "about"
    const inView = GetInView(pageNum)

    const text1 =
        "Hello, I'm David. I'm a 17-year-old highschool student from Vietnam. I've made it my goal to learn something new everyday."
    const text2 =
        "I've just started my web development journey, but I'm determined to learn and experiment with any technology that I can get my hands on."

    const mouseParallaxBase = {
        transform: `translate3d(${(x - pageWidth / 2) / -80}px, ${
            (y - pageHeight / 2) / -80
        }px, 0px)`,
    }

    const mouseParallaxTitle = {
        transform: `translate3d(${(x - pageWidth / 2) / 40}px, ${
            (y - pageHeight / 2) / 40
        }px, 0px)`,
    }

    const mouseParallaxText = {
        transform: `translate3d(${(x - pageWidth / 2) / 120}px, ${
            (y - pageHeight / 2) / 120
        }px, 0px)`,
    }

    const mouseParallaxTop = {
        transform: `translate3d(${(x - pageWidth / 2) / -50}px, ${
            (y - pageHeight / 2) / -50
        }px, 0px)`,
    }

    const mouseParallaxButton = {
        transform: `translate3d(${(x - pageWidth / 2) / 60}px, ${
            (y - pageHeight / 2) / 60
        }px, 0px)`,
    }

    return (
        <div
            id="about"
            className="flex justify-center items-center relative h-screen w-screen bg-transparent"
        >
            <div className="absolute w-[1280px] h-[720px]">
                <div
                    className={`${styles.bg1} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxBase}
                >
                    <Image
                        src={bg_about_base_1}
                        alt="bg_about_base_1"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className={`${styles.bg2} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxBase}
                >
                    <Image
                        src={bg_about_base_2}
                        alt="bg_about_base_2"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className={`${styles.bg1} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxTop}
                >
                    <Image
                        src={bg_about_top_1}
                        alt="bg_about_top_1"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className={`${styles.bg2} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxTop}
                >
                    <Image
                        src={bg_about_top_2}
                        alt="bg_about_top_2"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
            <div
                className={`${styles.backdrop} ${
                    aboutMe ? styles.active : null
                }`}
            ></div>
            <div className="absolute w-[1280px] h-[720px]">
                <div
                    className={`${styles.bg3} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxBase}
                >
                    <Image
                        src={bg_about_base_3}
                        alt="bg_about_base_3"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
            <div className="absolute w-[1280px] h-[720px] flex items-center justify-center">
                <div
                    className={`${styles.hero} ${
                        aboutMe ? styles.active : null
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
                <div
                    className={`${styles.bg3} ${
                        inView ? styles.inView : null
                    } ${aboutMe ? styles.active : null}`}
                    style={mouseParallaxTop}
                >
                    <Image
                        src={bg_about_top_3}
                        alt="bg_about_top_3"
                        layout="fixed"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
            <div className={styles.textbox}>
                <p
                    className={`${styles.text1} ${
                        aboutMe ? styles.active : null
                    }`}
                    style={mouseParallaxText}
                >
                    {text1}
                </p>
                <p
                    className={`${styles.text2} ${
                        aboutMe ? styles.active : null
                    }`}
                    style={mouseParallaxText}
                >
                    {text2}
                </p>
                <button
                    className={`${styles.button} ${
                        aboutMe ? styles.active : null
                    }`}
                    style={mouseParallaxButton}
                    onClick={() => setAboutMe(!aboutMe)}
                >
                    {aboutMe ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
    )
}

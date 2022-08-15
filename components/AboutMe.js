import styles from "./AboutMe.module.scss"
import Image from "next/image"
import Hero from "../layouts/Hero"
import ShowMoreButton from "../layouts/ShowMoreButton"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"
import GetInView from "../lib/GetInView"

import bg_about_base_1 from "../public/images/bg_about_base_1.png"
import bg_about_base_2 from "../public/images/bg_about_base_2.png"
import bg_about_base_3 from "../public/images/bg_about_base_3.png"
import bg_about_top_1 from "../public/images/bg_about_top_1.png"
import bg_about_top_2 from "../public/images/bg_about_top_2.png"
import bg_about_top_3 from "../public/images/bg_about_top_3.png"

export default function AboutMe({ aboutMeActive, setAboutMeActive }) {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()

    const pageNum = 1
    const title = "about"
    const inView = GetInView(pageNum)

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
                    className={`${styles.bg1} ${inView ? styles.active : null}`}
                    style={mouseParallaxBase}
                >
                    <Image
                        src={bg_about_base_1}
                        alt="bg_about_base_1"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className={`${styles.bg2} ${inView ? styles.active : null}`}
                    style={mouseParallaxBase}
                >
                    <Image
                        src={bg_about_base_2}
                        alt="bg_about_base_2"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div className={styles.bg3} style={mouseParallaxBase}>
                    <Image
                        src={bg_about_base_3}
                        alt="bg_about_base_3"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
            <Hero
                inView={inView}
                title={
                    <p
                        className="text-white text-9xl mx-9 my-5"
                        style={mouseParallaxTitle}
                    >
                        {title}
                    </p>
                }
            />
            <div className="absolute w-[1280px] h-[720px]">
                <div
                    className={`${styles.bg1} ${inView ? styles.active : null}`}
                    style={mouseParallaxTop}
                >
                    <Image
                        src={bg_about_top_1}
                        alt="bg_about_top_1"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className={`${styles.bg2} ${inView ? styles.active : null}`}
                    style={mouseParallaxTop}
                >
                    <Image
                        src={bg_about_top_2}
                        alt="bg_about_top_2"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div className={styles.bg3} style={mouseParallaxTop}>
                    <Image
                        src={bg_about_top_3}
                        alt="bg_about_top_3"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
            <ShowMoreButton mouseParallaxTitle={mouseParallaxButton} handleClick={() => setAboutMeActive(!aboutMeActive)} />
        </div>
    )
}

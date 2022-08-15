import styles from "./Home.module.scss"
import Image from "next/image"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"
import GetInView from "../lib/GetInView"

import astronaut from "../public/images/astronaut.png"
import chips from "../public/images/chips.png"
import cola from "../public/images/cola.png"
import donut from "../public/images/donut.png"
import Hero from "../layouts/Hero"

export default function Home() {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()

    const pageNum = 0
    const top = "35%"
    const title = "get good."
    const inView = GetInView(pageNum)

    const mouseParallax = (n) => {
        return {
            transform: `translate3d(${(x - pageWidth / 2) / n}px, ${
                (y - pageHeight / 2) / n
            }px, 0px)`,
        }
    }

    return (
        <div
            id="home"
            className="flex justify-center items-center relative h-screen w-screen bg-transparent"
        >
            <Hero
                top={top}
                inView={inView}
                title={
                    <p
                        className="text-white text-9xl mx-9 my-5"
                        style={mouseParallax(40)}
                    >
                        {title}
                    </p>
                }
            />
            <div className={styles.art}>
                <Image
                    src={chips}
                    alt="chips"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    style={{
                        ...mouseParallax(24),
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                />
            </div>
            <div className={styles.art}>
                <Image
                    src={cola}
                    alt="cola"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    style={{
                        ...mouseParallax(25),
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                />
            </div>
            <div className={styles.art}>
                <Image
                    src={donut}
                    alt="donut"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    style={{
                        ...mouseParallax(22),
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                />
            </div>
            <div className={styles.art}>
                <Image
                    src={astronaut}
                    alt="astronaut"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    style={{
                        ...mouseParallax(15),
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                />
            </div>
            <div
                className={`${styles.license} ${
                    inView ? styles.active : null
                } absolute w-fit right-0 bottom-0 m-2 italic text-sm text-slate-600`}
            >
                *vecteezy.com
            </div>
        </div>
    )
}

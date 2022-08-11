import styles from "./Projects.module.scss"
import Image from "next/image"
import Hero from "../layouts/Hero"
import ShowMoreButton from "../layouts/ShowMoreButton"
import useMouseMove from "../lib/UseMouseMove"
import GetInView from "../lib/GetInView"

export default function Projects() {
    const [x, y] = useMouseMove()

    const pageNum = 2
    const title = "projects"
    const inView = GetInView(pageNum)

    const mouseParallaxBase = {
        transform: `translate3d(${(x - 720) / -80}px, ${
            (y - 397.5) / -80
        }px, 0px)`,
    }

    const mouseParallaxTitle = {
        transform: `translate3d(${(x - 720) / 40}px, ${
            (y - 397.5) / 40
        }px, 0px)`,
    }

    const mouseParallaxTop = {
        transform: `translate3d(${(x - 720) / -50}px, ${
            (y - 397.5) / -50
        }px, 0px)`,
    }

    const mouseParallaxButton = {
        transform: `translate3d(${(x - 720) / 60}px, ${
            (y - 397.5) / 60
        }px, 0px)`,
    }

    return (
        <div
            id="projects"
            className="flex justify-center items-center relative h-screen w-screen bg-transparent"
        >
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
            <div className="absolute w-[1280px] h-[720px]" style={mouseParallaxTop}>
                <div className={`${styles.triangle} ${styles.triangle1}`}>&#9650;</div>
                <div className={`${styles.triangle} ${styles.triangle2}`}>&#9650;</div>
                <div className={`${styles.triangle} ${styles.triangle3}`}>&#9650;</div>
                <div className={`${styles.triangle} ${styles.triangle4}`}>&#9650;</div>
                <div className={`${styles.triangle} ${styles.triangle5}`}>&#9650;</div>
            </div>
        </div>
    )
}

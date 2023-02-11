import Hero from "../layouts/Hero"
import useMouseMove from "../lib/UseMouseMove"
import GetPageWidthHeight from "../lib/GetPageWidthHeight"
import GetInView from "../lib/GetInView"

export default function Projects() {
    const [x, y] = useMouseMove()
    const [pageWidth, pageHeight] = GetPageWidthHeight()

    const pageNum = 2
    const title = "projects"
    const inView = GetInView(pageNum)

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
            </div>
        </div>
    )
}

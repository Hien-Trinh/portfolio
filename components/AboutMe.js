import Hero from "../layouts/Hero"
import useMouseMove from "../lib/UseMouseMove"
import getInView from "../lib/GetInView"

export default function AboutMe() {
    const [x, y] = useMouseMove()

    const pageNum = 1
    const title = "about"
    const inView = getInView(pageNum)

    return (
        <div id="about" className="h-screen w-screen bg-transparent snap-start snap-always">
            <Hero pageNum={pageNum} inView={inView} title={<p className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>{title}</p>} />
        </div>
    )
}
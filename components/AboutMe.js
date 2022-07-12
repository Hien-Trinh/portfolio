import Page from "../layouts/Page"
import Hero from "../layouts/Hero"
import useMouseMove from "../lib/UseMouseMove"

export default function AboutMe() {
    const [x, y] = useMouseMove()

    const pageNum = 1
    const title = "About"

    return (
        <Page id="about">
            <Hero pageNum={pageNum} title={<p className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>{title}</p>} />
        </Page>
    )
}
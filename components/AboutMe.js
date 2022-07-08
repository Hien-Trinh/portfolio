import useMouseMove from "../lib/UseMouseMove"

export default function AboutMe() {
    const [x, y] = useMouseMove()

    return (
        <div id="about" className="h-screen w-screen bg-transparent snap-start snap-always">
            <div className="relative top-[320px] left-[15%]" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>
                <p className="text-white text-6xl">About me</p>
            </div>
        </div>
    )
}
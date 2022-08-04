

export default function ShowMoreButton() {
    return (
        <div className="flex justify-center items-center relative h-screen w-screen bg-transparent">
            <div className="absolute">
                <Image src={bg_about_base} alt="bg_about_base" layout="intrinsic" width={1280} height={720} style={{transform: `translate3d(${(x - 720) / 100}px, ${(y - 397.5) / 100}px, 0px)`, position: "absolute", top: 0, right: 0}} />
            </div>
            <Hero inView={inView} title={<p className="text-white text-9xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>{title}</p>} />
            <div className="absolute">
                <Image src={bg_about_top} alt="bg_about_top" layout="intrinsic" width={1280} height={720} style={{transform: `translate3d(${(x - 720) / 100}px, ${(y - 397.5) / 100}px, 0px)`, position: "absolute", top: 0, right: 0}} />
            </div>
        </div>
    )
}
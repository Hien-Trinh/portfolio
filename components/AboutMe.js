import Image from "next/image"
import Hero from "../layouts/Hero"
import useMouseMove from "../lib/UseMouseMove"
import GetInView from "../lib/GetInView"

import bg_about_base_1 from "../public/images/bg_about_base_1.png"
import bg_about_base_2 from "../public/images/bg_about_base_2.png"
import bg_about_base_3 from "../public/images/bg_about_base_3.png"
import bg_about_top_1 from "../public/images/bg_about_top_1.png"
import bg_about_top_2 from "../public/images/bg_about_top_2.png"
import bg_about_top_3 from "../public/images/bg_about_top_3.png"

export default function AboutMe() {
    const [x, y] = useMouseMove()

    const pageNum = 1
    const title = "about"
    const inView = GetInView(pageNum)

    return (
        <div
            id="about"
            className="flex justify-center items-center relative h-screen w-screen bg-transparent"
        >
            <div className="absolute w-[1280px] h-[720px]">
                <div
                    className="absolute top-[7.5%] left-[31.1%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 80}px, ${
                            (y - 397.5) / 80
                        }px, 0px)`,
                    }}
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
                    className="absolute top-[31.3%] left-[44.8%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 80}px, ${
                            (y - 397.5) / 80
                        }px, 0px)`,
                    }}
                >
                    <Image
                        src={bg_about_base_2}
                        alt="bg_about_base_2"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className="absolute top-[17.2%] left-[58.4%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 80}px, ${
                            (y - 397.5) / 80
                        }px, 0px)`,
                    }}
                >
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
                        style={{
                            transform: `translate3d(${(x - 720) / 50}px, ${
                                (y - 397.5) / 50
                            }px, 0px)`,
                        }}
                    >
                        {title}
                    </p>
                }
            />
            <div className="absolute w-[1280px] h-[720px]">
                <div
                    className="absolute top-[7.5%] left-[31.1%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 65}px, ${
                            (y - 397.5) / 65
                        }px, 0px)`,
                    }}
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
                    className="absolute top-[31.3%] left-[44.8%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 65}px, ${
                            (y - 397.5) / 65
                        }px, 0px)`,
                    }}
                >
                    <Image
                        src={bg_about_top_2}
                        alt="bg_about_top_2"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
                <div
                    className="absolute top-[17.2%] left-[58.4%]"
                    style={{
                        transform: `translate3d(${(x - 720) / 65}px, ${
                            (y - 397.5) / 65
                        }px, 0px)`,
                    }}
                >
                    <Image
                        src={bg_about_top_3}
                        alt="bg_about_top_3"
                        layout="intrinsic"
                        width={133}
                        height={466}
                    />
                </div>
            </div>
        </div>
    )
}

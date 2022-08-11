import Head from "next/head"
import Header from "../components/Header"
import StarField from "../components/StarField"
import Wrapper from "../layouts/Wrapper"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import AboutMeExtended from "../components/AboutMeExtended"
import Projects from "../components/Projects"
import { useState } from "react"

export default function Main() {
    const [aboutMeActive, setAboutMeActive] = useState(false)

    return (
        <main>
            <Head>
                <title>David</title>
            </Head>
            <StarField>
                <Wrapper>
                    <Home />
                    <AboutMe aboutMeActive={aboutMeActive} setAboutMeActive={setAboutMeActive} />
                    <Projects />
                </Wrapper>
                <Header />
                <AboutMeExtended isActive={aboutMeActive} />
            </StarField>
        </main>
    )
}

import Head from "next/head"
import Header from "../components/Header"
import StarField from "../components/StarField"
import Wrapper from "../layouts/Wrapper"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { useState } from "react"

export default function Main() {
    const [pageNum, setPageNum] = useState(0)
    const [aboutMeActive, setAboutMeActive] = useState(false)

    return (
        <main>
            <Head>
                <title>David</title>
            </Head>
            <StarField>
                <Wrapper pageNum={pageNum} setPageNum={setPageNum}>
                    <Home />
                    <AboutMe aboutMeActive={aboutMeActive} setAboutMeActive={setAboutMeActive} />
                    <Projects />
                    <Contact />
                </Wrapper>
                <Header setPageNum={setPageNum} />
            </StarField>
        </main>
    )
}

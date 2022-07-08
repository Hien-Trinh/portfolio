import Head from "next/head"
import Header from "../components/Header"
import StarField from "../components/StarField"
import Wrapper from "../layouts/Wrapper"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"

export default function Main() {

    return (
        <main>
            <Head>
                <title>David</title>
            </Head>
            <StarField>
                <Wrapper>
                    <Home />
                    <AboutMe />
                </Wrapper>
                <Header />
            </StarField>
        </main>
    )
}

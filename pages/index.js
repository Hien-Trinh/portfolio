import Head from "next/head"
import Header from "../components/Header"
import StarField from "../components/StarField"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"

export default function Main() {
    return (
        <div>
            <Head>
                <title>David</title>
            </Head>
            <StarField>
                <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
                    <Home />
                    <AboutMe />
                </div>
                <Header />
            </StarField>
        </div>
    )
}

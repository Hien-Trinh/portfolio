import Head from "next/head"
import Header from "../components/Header"
import ShootingStarsArt from "../components/ShootingStarsArt"
import Hero from "../components/Hero"

export default function Home() {
    return (
        <div>
            <Head>
                <title>David</title>
            </Head>
            <Header />
            <ShootingStarsArt />
            <Hero />
        </div>
    )
}

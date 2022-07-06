import Head from "next/head"
import Header from "../components/Header"
import ShootingStarsArt from "../components/ShootingStarsArt"
import Home from "../components/Home"

export default function Main() {
    return (
        <div>
            <Head>
                <title>David</title>
            </Head>
            <ShootingStarsArt />
            <Home />
            <Header />
        </div>
    )
}

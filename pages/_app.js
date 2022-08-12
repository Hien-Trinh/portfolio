import "../styles/globals.css"
import Transition from "../layouts/Transition"

function MyApp({ Component, pageProps }) {
    return (
        <Transition>
            <Component {...pageProps} />
        </Transition>
    )
}

export default MyApp

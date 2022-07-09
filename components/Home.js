import styles from './Home.module.scss'
import Page from '../layouts/Page'
import useMouseMove from '../lib/UseMouseMove'
import useScrollMove from '../lib/UseScrollMove'

export default function Home() {
    const [x, y] = useMouseMove()
    const scrollY = (useScrollMove() <= 0)

    return (
        <Page id="home">
            <div className="relative w-max h-max left-[15%] top-80 overflow-hidden">
                <div className={`${styles.hero} ${scrollY ? styles.active : null}`}>
                    <p className="text-white text-6xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>get good.</p>
                </div>
            </div>
        </Page>
    )
}
import styles from './Home.module.scss'
import useMouseMove from '../lib/UseMouseMove'

export default function Home() {
    const [x, y] = useMouseMove()

    return (
        <section id="home">
            <div className="container h-screen bg-transparent">
                <div className={styles.hero} style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>
                    <p className="text-white text-6xl">well done.</p>
                </div>
            </div>
        </section>
    )
}
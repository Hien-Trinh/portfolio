import styles from './Hero.module.scss'
import useMouseMove from '../lib/UseMouseMove'
import useScrollMove from '../lib/UseScrollMove'

export default function Hero({ children }) {
    const [x, y] = useMouseMove()
    const scrollY = (useScrollMove() < 398)

    return (
        <div className={`${styles.hero} ${scrollY ? styles.active : null}`}>
            <div className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>
                {children}
            </div>
        </div>
    )
}
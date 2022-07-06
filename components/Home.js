import styles from './Home.module.scss'
import { useState, useEffect } from 'react'

export default function Home() {
    const [x, y] = useMouseMove()

    return (
        <section id="home">
            <div className={styles.hero} style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>
                <p className="text-white text-6xl">well done.</p>
            </div>
        </section>
    )
}

const useMouseMove = () => {
    const [coords, setCoords] = useState([0, 0])

    useEffect(() => {
        const handler = ({ clientX, clientY }) => {
            setCoords([clientX, clientY]);
        };
        window.addEventListener('mousemove', handler);
        return () => {
            window.removeEventListener('mousemove', handler);
        };
    }, []);

    return coords
}
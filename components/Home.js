import styles from './Home.module.scss'
import { useState, useEffect } from 'react'

export default function Home() {
    const [x, y] = useMouseMove()

    return (
        <section id="home">
            <div className={styles.hero} style={{top: -((y - 397.5) / 800) + 20 + "rem", left: -((x - 720) / 600) + 12 + "rem"}}>
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
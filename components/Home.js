import styles from './Home.module.scss'
import Image from 'next/image'
import useMouseMove from '../lib/UseMouseMove'
import getInView from '../lib/GetInView'

import astronaut from '../public/images/astronaut.png'
import chips from '../public/images/chips.png'
import cola from '../public/images/cola.png'
import donut from '../public/images/donut.png'
import Hero from '../layouts/Hero'

export default function Home() {
    const [x, y] = useMouseMove()

    const pageNum = 0
    const title = "get good."
    const inView = getInView(pageNum)

    return (
        <div id="home" className="relative h-screen w-screen bg-transparent snap-start snap-always">
            <Hero pageNum={pageNum} inView={inView} title={<p className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>{title}</p>} />
            <div className={`${styles.art} ${styles.chips} ${inView ? styles.active : null}`}>
                <Image src={chips} alt="chips" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 24}px, ${(y - 397.5) / 24}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.cola} ${inView ? styles.active : null}`}>
                <Image src={cola} alt="cola" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 25}px, ${(y - 397.5) / 25}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.donut} ${inView ? styles.active : null}`}>
                <Image src={donut} alt="donut" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 22}px, ${(y - 397.5) / 22}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.astronaut} ${inView ? styles.active : null}`}>
                <Image src={astronaut} alt="astronaut" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 15}px, ${(y - 397.5) / 15}px, 0px)`, position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.license} ${inView? styles.active : null} absolute w-fit right-0 bottom-0 m-2 italic text-sm text-slate-600`}>*vecteezy.com</div>
        </div>
    )
}
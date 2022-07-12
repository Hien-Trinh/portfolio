import styles from './Home.module.scss'
import Image from 'next/image'
import Page from '../layouts/Page'
import useMouseMove from '../lib/UseMouseMove'
import useScrollMove from '../lib/UseScrollMove'

import astronaut from '../public/images/astronaut.png'
import chips from '../public/images/chips.png'
import cola from '../public/images/cola.png'
import donut from '../public/images/donut.png'
import Hero from '../layouts/Hero'
import HeroTitle from '../layouts/HeroTitle'

export default function Home() {
    const [x, y] = useMouseMove()
    const scrollY = (useScrollMove() < 398)

    return (
        <Page id="home">
            <Hero children={<HeroTitle pageNum={0} children={"get good."} />} />
            <div className={`${styles.art} ${styles.chips} ${scrollY ? styles.active : null}`}>
                <Image src={chips} alt="chips" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 24}px, ${(y - 397.5) / 24}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.cola} ${scrollY ? styles.active : null}`}>
                <Image src={cola} alt="cola" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 25}px, ${(y - 397.5) / 25}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.donut} ${scrollY ? styles.active : null}`}>
                <Image src={donut} alt="donut" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 22}px, ${(y - 397.5) / 22}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.astronaut} ${scrollY ? styles.active : null}`}>
                <Image src={astronaut} alt="astronaut" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 15}px, ${(y - 397.5) / 15}px, 0px)`, position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className="absolute w-fit right-0 bottom-0 m-2 italic text-sm text-slate-600">*vecteezy.com</div>
        </Page>
    )
}
import styles from './Home.module.scss'
import Image from 'next/image'
import Page from '../layouts/Page'
import useMouseMove from '../lib/UseMouseMove'
import useScrollMove from '../lib/UseScrollMove'

export default function Home() {
    const [x, y] = useMouseMove()
    const scrollY = (useScrollMove() < 398)

    return (
        <Page id="home">
            <div className="absolute w-max h-max left-[15%] top-52 overflow-hidden">
                <div className={`${styles.hero} ${scrollY ? styles.active : null}`}>
                    <p className="text-white text-8xl mx-9 my-5" style={{transform: `translate3d(${(x - 720) / 50}px, ${(y - 397.5) / 50}px, 0px)`}}>get good.</p>
                </div>
            </div>
            <div className={`${styles.art} ${styles.astronaut} ${scrollY ? styles.active : null}`}>
                <Image src="/../public/images/astronaut.png" alt="astronaut" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 25}px, ${(y - 397.5) / 25}px, 0px)`, position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className={`${styles.art} ${styles.chips} ${scrollY ? styles.active : null}`}>
                <Image src="/../public/images/chips.png" alt="chips" layout="intrinsic" width={500} height={300} style={{transform: `translate3d(${(x - 720) / 15}px, ${(y - 397.5) / 15}px, 0px)`,position: "absolute", top: 0, right: 0}}/>
            </div>
            <div className="absolute w-fit right-0 bottom-0 m-2 italic text-sm text-slate-600">*vecteezy.com</div>
        </Page>
    )
}
import { useState, useEffect } from "react"

const useMouseMove = () => {
    const [coords, setCoords] = useState([720, 397.5])

    useEffect(() => {
        const handler = ({ clientX, clientY }) => {
            setCoords([
                (clientX / window.innerWidth) * 1470,
                (clientY / window.innerHeight) * 795,
            ])
        }
        window.addEventListener("mousemove", handler)
        return () => {
            window.removeEventListener("mousemove", handler)
        }
    }, [])

    return coords
}

export default useMouseMove

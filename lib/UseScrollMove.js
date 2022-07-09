import { useState, useEffect } from 'react'

const useScrollMove = () => {
    const [coords, setCoords] = useState(0)

    useEffect(() => {
        const element = document.getElementById("wrapper")
        const handler = () => {
            setCoords(element.scrollTop);
        };
        element.addEventListener('scroll', handler);
        return () => {
            element.removeEventListener('scroll', handler);
        };
    }, []);

    return coords
}

export default useScrollMove
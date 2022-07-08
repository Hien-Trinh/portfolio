import { useState, useEffect } from 'react'

const useScrollMove = () => {
    const [coords, setCoords] = useState(0)

    useEffect(() => {
        const handler = () => {
            setCoords(window.pageYOffset);
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    return coords
}

export default useScrollMove
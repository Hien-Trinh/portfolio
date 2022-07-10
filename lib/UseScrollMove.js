import { useState, useEffect } from 'react'

const useScrollMove = () => {
    const [coords, setCoords] = useState(0)

    useEffect(() => {
        console.log('useScrollMove')
        const element = document.getElementById("wrap")
        const handler = () => {
            setCoords(element.scrollTop);
        };
        element.addEventListener('scroll', handler);
        return () => {
            element.removeEventListener('scroll', handler);
        };
    }, [coords]);

    return coords
}

export default useScrollMove
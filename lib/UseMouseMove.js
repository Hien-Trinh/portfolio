import { useState, useEffect } from 'react'

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

export default useMouseMove
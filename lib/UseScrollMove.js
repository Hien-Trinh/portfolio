import { useState, useEffect } from 'react'
import Scrollbar from "smooth-scrollbar"

const useScrollMove = () => {
    const [coords, setCoords] = useState(0)

    useEffect(() => {
        const scrollbar = Scrollbar.init(document.getElementById("wrap"))
        const handler = () => {
            setCoords(scrollbar.scrollTop);
        };
        scrollbar.addListener(handler);
        return () => {
            scrollbar.removeListener(handler);
        };
    }, [coords]);

    return coords
}

export default useScrollMove
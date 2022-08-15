import { useEffect, useState } from "react"

const GetPageWidthHeight = () => {
    const [pageWidth, setPageWidth] = useState(0)
    const [pageHeight, setPageHeight] = useState(0)

    useEffect(() => {
        setPageWidth(window.innerWidth)
        setPageHeight(window.innerHeight)
    }, [])

    return [pageWidth, pageHeight]
}

export default GetPageWidthHeight
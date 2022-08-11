import Scrollbar from "smooth-scrollbar"

const useSetScrollPosition = (pageNum) => {
    const scrollbar = Scrollbar.get(document.getElementById("wrap"))
    const pageHeight = window.innerHeight

    scrollbar.setPosition(0, pageNum * pageHeight)

    return
}

export default useSetScrollPosition

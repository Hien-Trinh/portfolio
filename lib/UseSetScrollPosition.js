import Scrollbar from "smooth-scrollbar";

const useSetScrollPosition = (pageNum) => {
    const scrollbar = Scrollbar.get(document.getElementById("wrap"))

    const home = document.getElementById("home")
    const about = document.getElementById("about")

    const pages = [home, about]

    scrollbar.setPosition(0, pages[pageNum].offsetTop)

    return
}

export default useSetScrollPosition
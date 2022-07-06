import HamburgerMenu from "./HamburgerMenu"

export default function Menu() {
    return (
        <div>
            <HamburgerMenu />
            <ul className="text-white text-6xl absolute top-44 left-52 hidden">
                <li className="my-2 py-4">Home</li>
                <li className="my-2 py-4">About</li>
                <li className="my-2 py-4">Projects</li>
                <li className="my-2 py-4">Contact</li>
            </ul>
        </div>
    )
}
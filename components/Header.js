import HamburgerMenu from "./HamburgerMenu"

export default function Header() {
    return (
        <div className="flex w-screen top-0 fixed">
            <HamburgerMenu/>
            <div className="text-white text-4xl absolute top-7 left-10">DT</div>
        </div>
    )
}
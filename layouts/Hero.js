export default function Hero({ children }) {
    return (
        <div className="absolute w-max h-max left-[15%] top-52 overflow-hidden">
            {children}
        </div>
    )
}
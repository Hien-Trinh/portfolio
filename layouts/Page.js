export default function Page({ children }) {
    return (
        <div className="h-screen w-screen bg-transparent snap-start snap-always">
            {children}
        </div>
    )
}
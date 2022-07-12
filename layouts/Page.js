export default function Page({ children }) {
    return (
        <section className="h-screen w-screen bg-transparent snap-start snap-always">
            {children}
        </section>
    )
}
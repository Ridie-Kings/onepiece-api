export const Navbar = () => {
    return (
        <nav className="bg-red-700 flex flex-row justify-between p-4">
            <h1>One Piece Characters</h1>
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/characters">Characters</a></li>
            </ul>
        </nav>
    )
}
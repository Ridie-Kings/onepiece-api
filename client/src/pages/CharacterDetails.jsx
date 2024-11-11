import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CharacterDetails = () => {
    const location = useLocation();
    const character = JSON.stringify(location.state.character);

    if (!character) return <div>Character not found</div>;

    return (
        <main className="w-screen h-screen bg-yellow-950">
            <Navbar />
            <h1 className="text-white ">{character}</h1>
        </main>
    )
}
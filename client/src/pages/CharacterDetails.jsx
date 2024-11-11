import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CharacterDetails = () => {
    const location = useLocation();
    const character = location.state.character;
    console.log(character);

    if (!character) return <div>Character not found</div>;

    return (
        <main className="w-screen h-screen bg-yellow-950 text-white">
            <Navbar />
            <h1>{character.name}</h1>
            <p>{character.bounty} Berris</p>
            <p>{character.description}</p>
            <p>{character.origin.name}, {character.origin.ocean}: {character.origin.description}</p>
        </main>
    )
}
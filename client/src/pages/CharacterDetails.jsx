import { useLocation } from "react-router-dom";
import { Container } from "../components/Container";

export const CharacterDetails = () => {
    const location = useLocation();
    const character = location.state.character;
    console.log(character);

    if (!character) return <div>Character not found</div>;

    return (
        <Container>
            <h1>{character.name}</h1>
            <p>{character.bounty} Berris</p>
            <p>{character.description}</p>
            <p>{character.origin.name}, {character.origin.ocean}: {character.origin.description}</p>
        </Container>
    )
}
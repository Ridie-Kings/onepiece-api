import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { LoaderSpinner } from "../components/Loader-Spinner";


const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCharacters = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/characters');
            if (!response.ok) throw new Error('Error al obtener los personajes');
            const data = await response.json();
            console.log(data);
            setCharacters(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    if (loading) return <LoaderSpinner />;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className="bg-yellow-950">
            <Navbar />
            <h1 className="flex justify-center p-8 text-white">The One Piece API</h1>
            <section className="flex flex-wrap gap-5 justify-center p-5">
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </section>
        </main>
    );
};

export default CharactersPage;

import { useEffect, useState } from "react";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Container } from "../components/Container";
import { SecondCard } from "../components/SecondCard";

export const RacesPage = () => {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRaces = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/races');
            if (!response.ok) throw new Error('Error al obtener las razas');
            const data = await response.json();
            const filteredData = data.filter(data => data.name !== "Unknonw");
            setRaces(filteredData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRaces();
    }, []);

    if (loading) return <LoaderSpinner />;
    if (error) return <div>Error: {error}</div>;
    return (
        <Container>
            <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Races of One Piece
            </h1>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-4 py-12">
                {races.map((race) => (
                    <SecondCard item={race} key={race.id} link={`/races/${race.id}`} images={[
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401",
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401"
                    ]}>
                    </SecondCard>
                ))}
            </section>

        </Container>
    )
}
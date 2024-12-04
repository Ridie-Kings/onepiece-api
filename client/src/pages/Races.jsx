import { useEffect, useState } from "react";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Swords } from 'lucide-react';
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
                    <SecondCard item={race} key={race.id} >
                        <div className="p-6">
                            <div className="space-y-4">

                                <div className="flex items-center gap-3">
                                    <Swords className="w-5 h-5 text-purple-600" />
                                    <span className="font-semibold">Special Traits:</span>
                                    <span>{race.type || "Various"}</span>
                                </div>
                                <p className="text-gray-600 mt-4">{race.description}</p>
                            </div>
                        </div>
                    </SecondCard>
                ))}
            </section>

        </Container>
    )
}
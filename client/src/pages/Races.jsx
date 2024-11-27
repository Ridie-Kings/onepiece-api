import { useEffect, useState } from "react";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Swords } from 'lucide-react';
import { Container } from "../components/Container";

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
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
                    {races.map((race) => (
                        <article
                            key={race.id}
                            className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={"https://images.unsplash.com/photo-1516912481808-3406841bd33c"}
                                    alt={race.name}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <h2 className="text-2xl font-bold text-white p-4">{race.name}</h2>
                                </div>
                            </div>
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
                        </article>
                    ))}
                </section>

        </Container>
    )
}
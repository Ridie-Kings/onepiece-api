import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Star, Skull } from 'lucide-react';

export const DevilsFruitsPage = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRaces = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/devil-fruits');
            if (!response.ok) throw new Error('Error al obtener las frutas del diablo');
            const data = await response.json();
            const filteredData = data.filter(fruit => fruit.name !== "Unknown" && fruit.name !== "None");
            setFruits(filteredData);
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
        <main className="min-h-screen bg-gradient-to-b from-yellow-950 to-red-950">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-6xl font-pirate text-center text-yellow-400 mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Devil Fruits
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fruits.map((fruit) => (
                        <article
                            key={fruit.id}
                            className="bg-[#fffef0] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                            <div className="relative h-48">
                                <img
                                    src={fruit.image || "https://images.unsplash.com/photo-1534447677768-be436bb09401"}
                                    alt={`${fruit.name} ship`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h2 className="text-3xl font-bold text-white text-center px-4">
                                        {fruit.name}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-600" />
                                    <span className="font-semibold">Type:</span>
                                    <span className="text-purple-700">{fruit.type}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-600" />
                                    <span className="font-semibold">Meaning:</span>
                                    <span className="text-purple-700">{fruit.meaning}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-600" />
                                    <span className="font-semibold">Awakening:</span>
                                    <span className="text-purple-700">{fruit.awakened}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Skull className="w-5 h-5 text-red-600" />
                                    <span className="font-semibold">Current User:</span>
                                    <span>{fruit.owner || "Unknown"}</span>
                                </div>
                                <p className="text-gray-700 mt-4"><strong>Description: </strong>{fruit.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    )
}
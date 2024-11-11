import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Flame, Skull, Star } from 'lucide-react';

export const DevilsFruitsPage = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRaces = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/devil-fruits');
            if (!response.ok) throw new Error('Error al obtener las frutas del diablo');
            const data = await response.json();
            setFruits(data);
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
        <main className="min-h-screen bg-gradient-to-b from-purple-950 to-pink-950">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-6xl font-pirate text-center text-purple-400 mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Devil Fruits
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fruits.map((fruit) => (
                        <article
                            key={fruit.id}
                            className="relative group bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-purple-900">{fruit.name}</h2>
                                    <Flame className="w-6 h-6 text-purple-600" />
                                </div>
                                <div className="space-y-4">
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
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
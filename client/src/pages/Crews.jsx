import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar"
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Anchor, Users, Swords } from 'lucide-react';

export const CrewsPage = () => {
    const [crews, setCrews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCrews = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/crews');
            if (!response.ok) throw new Error('Error al obtener las tripulaciones');
            const data = await response.json();
            console.log(data);
            setCrews(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCrews();
    }, []);

    if (loading) return <LoaderSpinner />;
    if (error) return <div>Error: {error}</div>;
    return (
        <main className="min-h-screen bg-gradient-to-b from-yellow-950 to-red-950">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-6xl font-pirate text-center text-yellow-400 mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Pirate Crews
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {crews.map((crew) => (
                        <article
                            key={crew.id}
                            className="bg-[#fffef0] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                            <div className="relative h-48">
                                <img
                                    src={crew.image || "https://images.unsplash.com/photo-1534447677768-be436bb09401"}
                                    alt={`${crew.name} ship`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h2 className="text-3xl font-bold text-white text-center px-4">
                                        {crew.name}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Anchor className="w-5 h-5 text-red-800" />
                                    <span className="font-semibold">Ship:</span>
                                    <span>{crew.ship || "Unknown"}</span>
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-5 h-5 text-red-800" />
                                    <span className="font-semibold">Members:</span>
                                    <span>{crew.members ? crew.members.length : "Unknown"}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Swords className="w-5 h-5 text-red-800" />
                                    <span className="font-semibold">Total Bounty:</span>
                                    <span>{crew.totalBounty || "Unknown"}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );

}
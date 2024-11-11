import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Building, Compass, Map } from 'lucide-react';

export const OriginsPage = () => {
    const [origins, setOrigins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRaces = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/locations');
            if (!response.ok) throw new Error('Error al obtener los origins');
            const data = await response.json();
            console.log(data);
            setOrigins(data);
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
        <main className="min-h-screen bg-gradient-to-b from-blue-900 to-green-900">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-6xl font-pirate text-center text-blue-400 mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Origins & Locations
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {origins.map((origin) => (
                        <article
                            key={origin.id}
                            className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={origin.image || "https://images.unsplash.com/photo-1516912481808-3406841bd33c"}
                                    alt={origin.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold text-white">{origin.name}</h2>
                                        <div className="flex items-center gap-2 text-blue-300">
                                            <Map className="w-4 h-4" />
                                            <span>{origin.region || "Unknown Region"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Compass className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm">Ocean: {origin.ocean || "Unknown"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Building className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm">Locations: {origin.locations.length || "Unknown"}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{origin.description}</p>
                                <h3 className="font-semibold mb-2">Notable Residents:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {origin.famousPeople?.map((character, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                                        >
                                            {character}
                                        </span>
                                    )) || <span className="text-gray-500">No notable residents</span>}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
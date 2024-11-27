import { useEffect, useState } from "react";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Eye, Shield, Zap } from 'lucide-react';
import { Container } from "../components/Container";

export const HakisPage = () => {
    const [hakis, setHakis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRaces = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/hakis');
            if (!response.ok) throw new Error('Error al obtener los hakis');
            const data = await response.json();
            const filteredData = data.filter(haki => haki.type !== "unknown");
            setHakis(filteredData);
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

    const getIcon = (type) => {
        switch (type) {
            case "observation":
                return <Eye className="w-8 h-8" />;
            case "armament":
                return <Shield className="w-8 h-8" />;
            case "conqueror":
                return <Zap className="w-8 h-8" />;
            default:
                return <Zap className="w-8 h-8" />;
        }
    };

    return (
        <Container>
                <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Haki Types
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
                    {hakis.map((haki) => (
                        <article
                            key={haki.id}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-white">{haki.name}</h2>
                                    <div className="text-yellow-500">
                                        {getIcon(haki.type)}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Description</h3>
                                        <p className="text-gray-300">{haki.description}</p>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Known Users</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {haki.famousUsers?.map((user, index) => (
                                                <span key={index} className="text-white bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                                                    {user}
                                                </span>
                                            )) || <span className="text-gray-400">No known users</span>}
                                        </div>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Advanced Techniques</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                                            {haki.techniques?.map((technique, index) => (
                                                <li key={index}>{technique}</li>
                                            )) || <li className="text-gray-400">No known techniques</li>}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
        </Container>
    )
}
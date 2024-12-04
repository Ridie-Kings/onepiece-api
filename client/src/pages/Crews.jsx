import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Anchor, Users, Swords } from 'lucide-react';
import { Container } from "../components/Container";
import { SecondCard } from "../components/SecondCard";

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
        <Container>
            <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Crews
            </h1>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
                {crews.map((crew) => (
                    <SecondCard item={crew} key={crew.id} link={true}>
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

                    </SecondCard>
                ))}
            </section>
        </Container>
    );

}

CrewsPage.propTypes = {
    crew: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        ship: PropTypes.string.isRequired,
        members: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                bounty: PropTypes.string.isRequired
            })
        ),
        totalBounty: PropTypes.string.isRequired
    })
}
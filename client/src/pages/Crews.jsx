import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { LoaderSpinner } from "../components/Loader-Spinner";
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
                    <SecondCard
                        item={crew}
                        key={crew.id}
                        link={`/crews/${crew.id}`}
                        images={[
                            "https://images.unsplash.com/photo-1534447677768-be436bb09401",
                            crew.flag
                        ]}
                    >
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
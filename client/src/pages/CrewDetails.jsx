import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Carrusel } from "../components/Carrusel";

export const CrewDetails = () => {
    const location = useLocation();
    const crew = location.state.crew;
    console.log(crew);

    if (!crew) return <div>Crew not found</div>;

    return (
        <>
            <Navbar />
            <main className="w-screen h-screen bg-yellow-950 text-white">
                <h1>{crew.name}</h1>
                <p>{crew.totalBounty} Berris</p>
                <p>{crew.description}</p>
                <p>{crew.ship}</p>
                <Carrusel crew={crew} />
            </main>
        </>
    )
}
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Carrusel } from "../components/Carrusel";

export const CrewDetails = () => {
    const location = useLocation();
    const crew = location.state.crew;
    console.log(crew);

    if (!crew) return <div>Crew not found</div>;

    return (
        <main className="w-screen h-screen bg-yellow-950 text-white min-h-screen bg-gradient-to-b from-yellow-950 to-red-950">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex items-center justify-center mb-4">
                    <img src='../images/LUFFY-FLAG8.webp' className="h-16 mr-4" alt="Luffy Flag" />
                    <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {crew.name}
                    </h1>
                    <img src='../images/LUFFY-FLAG8.webp' className="h-16 ml-4" alt="Luffy Flag" />
                </div>
                <p>{crew.totalBounty} Berris</p>
                <p>{crew.description}</p>
                <p>{crew.ship}</p>
                <Carrusel crew={crew}/>
            </div>
        </main>
    )
}
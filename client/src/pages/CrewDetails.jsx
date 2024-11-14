import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Carrusel } from "../components/Carrusel";
import { ImageTitle } from "../components/ImageTitle";

export const CrewDetails = () => {
    const location = useLocation();
    const crew = location.state.crew;
    console.log(crew);
    if (!crew) return <div>Crew not found</div>;

    return (
        <main className="min-h-screen bg-gradient-to-b from-yellow-950 to-red-950">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12 gap-y-4">
                <ImageTitle flag={crew.flagnobg} crewImage={crew.image} text={crew.name} crewName={crew.name} />
                {/* <div className="flex items-center justify-center mb-4">
                        <img src='../images/LUFFY-FLAG8.webp' className="h-16 mr-4" alt="Luffy Flag" />
                        <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            {crew.name}
                        </h1>
                        <img src='../images/LUFFY-FLAG8.webp' className="h-16 ml-4" alt="Luffy Flag" />
                    </div> 
                <img src={crew.image} alt={crew.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />*/}
                <p>{crew.totalBounty} Berris</p>
                <Carrusel crew={crew} />
                <p>{crew.description}</p>
            </div>
        </main>
    )
}
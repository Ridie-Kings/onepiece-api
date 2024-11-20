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

                <Carrusel crew={crew} />

                <article className="w-full p-8 text-center bg-[#fffef0] paper">
                    <div className="relative flex items-center justify-center w-full h-full text-center gap-1 pointer-events">
                        
                        <img
                            src={'../images/Berry-removebg-preview.png'}
                            alt={"berry"}
                            className="w-16 h-16 object-contain"
                        />
                        <h2 className="text-9xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-900 drop-shadow-lg pointer-events-none px-2">{crew.totalBounty}</h2>
                        <img
                            src={'../images/Berry-removebg-preview.png'}
                            alt={"berry"}
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    
                    <div>
                        <p className="flex justify-center items-center text-base text-gray-800 gap-1 text-4xl italic py-5">
                            "{crew.description}"
                        </p>
                    </div>


                </article>
                {/* <div className="relative flex items-center justify-center w-full h-full text-center gap-2 pointer-events-none hover:animate-pulse">
                    
                    <img
                        src={'../images/Berry-removebg-preview.png'}
                        alt={"berry"}
                        className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-9xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-900 drop-shadow-lg pointer-events-none">{crew.totalBounty}</h2>
                    <img
                        src={'../images/Berry-removebg-preview.png'}
                        alt={"berry"}
                        className="w-16 h-16 object-contain"
                    />
                </div> */}
                {/* <Carrusel crew={crew} /> */}
                
                {/* <article className="w-full p-8 text-center bg-[#fffef0] paper">
                    <div>
                        <p className="flex justify-center items-center text-base text-gray-800 gap-1 text-4xl italic">
                            "{crew.description}"
                        </p>
                    </div>
                </article> */}
            </div>
        </main>
    )
}
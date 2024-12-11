
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="min-h-screen bg-[url('/ocean-background.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">¡Ups! Página no encontrada</h1>
                    <p className="text-xl text-gray-700 mb-6">
                        Parece que has navegado hacia el Triángulo de Florian.
                    </p>
                    <div className="mb-6">
                        <img
                            src="https://res.cloudinary.com/dgyqcyqty/image/upload/v1731500583/luffy_z9ohly.webp"
                            alt="Luffy confus"
                            className="w-48 h-48 object-cover mx-auto rounded-full border-4 border-red-500"
                        />
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        Incluso con el Haki de Observación, no podemos encontrar esta página. ¡Volvamos a los mares conocidos!
                    </p>
                    <button onClick={() => navigate(-1)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"> Return               
                    </button>
                </div>
            </div>

        </Container>
    )
}
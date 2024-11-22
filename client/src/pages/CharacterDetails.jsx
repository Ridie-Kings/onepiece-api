import { useLocation } from "react-router-dom";
import { Container } from "../components/Container";
import { useState } from "react";

export const CharacterDetails = () => {
  const location = useLocation();
  const character = location.state?.character; // Gère les cas où character est absent

  const [showDetails, setShowDetails] = useState(false);

  if (!character) return <div>Character not found</div>;


  const handleShowDetail = () => {
    setShowDetails((prev) => !prev);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100)

  };


  return (
    <Container>
      <main className="w-full flex-1 flex items-center justify-center p-10">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="bg-gray-800 text-white rounded-lg shadow-2xl overflow-hidden">
            <div className="relative h-96">
              <img
                src={character.imagebg}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-4xl font-bold mb-2">{character.name}</h2>
                <p className="text-xl text-gray-300">{character.description}</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Informations</h3>
                <p>
                  <span className="font-bold">Prime :</span> {character.bounty}{" "}
                  Berry
                </p>
                <p>
                  <span className="font-bold">Équipage :</span>{" "}
                  {character.crew.name}
                </p>
                <p>
                  <span className="font-bold">Capitaine :</span>{" "}
                  {character.crew.captain}
                </p>
                <p>
                  <span className="font-bold">Navire :</span>{" "}
                  {character.crew.ship}
                </p>
                <p>
                  <span className="font-bold">Origine :</span>{" "}
                  {character.origin?.name} ({character.origin?.ocean})
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Capacités</h3>
                <p>
                  <span className="font-bold">Fruit du Démon :</span>{" "}
                  {character.devil_fruit.name !== "None"
                    ? `${character.devil_fruit.name} (${character.devil_fruit.type})`
                    : "Aucun"}
                </p>
                <p>
                  <span className="font-bold">Haki :</span>{" "}
                  {character.haki.map((h) => h.type).join(", ")}
                </p>
                <p>
                  <span className="font-bold">Armes :</span>{" "}
                  {character.weapons.map((w) => w.name).join(", ")}
                </p>
              </div>
            </div>
            <button
              onClick={handleShowDetail}
              className="w-full bg-blue-600 text-white py-3 text-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
            >
              {showDetails ? "Masquer les détails" : "Afficher plus de détails"}
            </button>
          </div>
          {showDetails && (
            <div className="mt-6">
              <a
                href={`/api/characters/${character.id}`}
                className="group rounded-lg p-6 flex items-end justify-center"
              >
                <img
                  src={character.image}
                  alt={`Portrait de ${character.name}`}
                  className="w-64 mx-auto group-hover:scale-110 mb-6 transition-all duration-150 drop-shadow-xl cursor-pointer"
                />
                <button className="absolute border rounded-full px-4 font-bold text-white py-2 group-hover:opacity-100 opacity-0 transition-all duration-500">
                  Click to get info
                </button>
              </a>
            </div>
          )}
        </div>
      </main>
    </Container>
  );
};

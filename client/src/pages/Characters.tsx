import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Container } from "../components/Container";
import { CharacterType } from "../types/interfaces";
import { useInView } from "react-intersection-observer";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [key, isVisible] = useInView();

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/characters?limit=${limit}`
      );
      if (!response.ok) throw new Error("Error al obtener los personajes");
      const data = await response.json();
      setCharacters(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLimit((prevLimit) => prevLimit + 3);
  }, [isVisible]);

  useEffect(() => {
    fetchCharacters();
  }, [isVisible]);

  if (loading) return <LoaderSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <h1 className="text-7xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mt-10 uppercase text-nowrap">
        One Piece Characters
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        {characters.map((character: CharacterType) => (
          <Card key={character.id} character={character} />
        ))}
      </section>
      <p ref={key} className="text-gray-700 text-center">
        Loading...
      </p>
    </Container>
  );
};

export default CharactersPage;

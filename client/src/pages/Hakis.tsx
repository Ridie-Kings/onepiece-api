import { useEffect, useState } from "react";
import { LoaderSpinner } from "../components/Loader-Spinner";
import { Container } from "../components/Container";
import { SecondCard } from "../components/SecondCard";
import { HakiType } from "../types/interfaces";

export const HakisPage = () => {
  const [hakis, setHakis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHakis = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/hakis");
      if (!response.ok) throw new Error("Error al obtener los hakis");
      const data = await response.json();
      const filteredData = data.filter(
        (haki: HakiType) => haki.type !== "unknown"
      );
      setHakis(filteredData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHakis();
  }, []);

  if (loading) return <LoaderSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <h1 className="text-6xl font-pirate text-center text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Haki Types
      </h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        {hakis.map((haki: HakiType) => (
          <SecondCard
            item={haki}
            key={haki.id}
            link={`/hakis/${haki.id}`}
            images={[
              "https://images.unsplash.com/photo-1534447677768-be436bb09401",
              "https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png",
            ]}
          >
            <div className="space-y-3">
              <div className="p-2 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Description
                </h3>
                <p className="text-gray-800">{haki.description}</p>
              </div>
              <div className="p-2 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Known Users
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {haki.famousUsers?.map((user, index) => (
                    <span
                      key={index}
                      className="text-white bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {user}
                    </span>
                  )) || <span className="text-gray-400">No known users</span>}
                </div>
              </div>
            </div>
          </SecondCard>
        ))}
      </section>
    </Container>
  );
};

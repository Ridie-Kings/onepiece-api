import { useLocation } from "react-router-dom";
import { Carrusel } from "../components/Carrusel";
import { ImageTitle } from "../components/ImageTitle";
import { Container } from "../components/Container";
import { NotFound } from "./NotFound.jsx";

export const CrewDetails = () => {
  const location = useLocation();
  const crew = location.state.crew;

  if (!crew) return <NotFound />;

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-12 gap-y-4">
        <ImageTitle
          flag={crew.flagnobg}
          crewImage={crew.image}
          text={crew.name}
          crewName={crew.name}
        />
        <Carrusel crew={crew} />

        <article className="w-full p-8 text-center bg-[#fffef0] paper">
          <div className="relative flex items-center justify-center w-full h-full text-center gap-1 pointer-events">
            <img
              src={"../images/Berry-removebg-preview.png"}
              alt={"berry"}
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-9xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-900 drop-shadow-lg pointer-events-none px-2">
              {crew.totalBounty}
            </h2>
            <img
              src={"../images/Berry-removebg-preview.png"}
              alt={"berry"}
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <p className="flex justify-center items-center text-gray-800 gap-1 text-4xl italic py-5">
              &quot;{crew.description}&quot;
            </p>
          </div>
        </article>
      </div>
    </Container>
  );
};

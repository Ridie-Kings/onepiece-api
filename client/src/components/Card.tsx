import { useRef, useState } from "react";
import { CharacterType } from "../types/interfaces";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const Card = ({ character }: { character: CharacterType }) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    setIsHover(true);
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={`/characters/${character.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative w-[336px] h-[475px] group flex flex-col place-content-evenly"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 items-center grid place-content-center rounded-xl shadow-lg"
      >
        <img
          src="./images/poster.png"
          alt=""
          className="absolute w-full h-auto top-0 left-0 object-cover rounded-lg z-10"
        />
        <div className="flex items-center justify-center relative aspect-[4/3] transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-30 group-hover:scale-110 w-64 h-full">
          <img
            src={character.imagebg}
            alt={character.name}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <motion.img
          src={character.image}
          alt={character.name}
          style={{
            opacity: isHover ? 1 : 0,
            transform: isHover
              ? "scale(0.8) translateZ(75px)"
              : "scale(0.7) translateZ(75px)",
          }}
          className="w-full h-full object-contain absolute -top-10 left-0 transition-all  duration-500 z-20"
        />
        <motion.div
          style={{ transform: "translateY(35px)" }}
          className="w-full h-[58%] relative flex flex-col justify-center gap-2 text-[#4d2a24] z-10 opacity-85"
        >
          <h2
            className="text-2xl tracking-normal  font-bold text-center uppercase w-full"
            style={{
              transform: "scaleY(3)",
              letterSpacing:
                character.name.length >= 16
                  ? "-0.025em"
                  : character.name.length < 7
                  ? "0.35em"
                  : "0.025em",
              fontSize: character.name.length >= 16 ? "1.2rem" : "1.5rem",
            }}
          >
            {character.name.toUpperCase()}
          </h2>
          <p className="text-red-900 flex flex-row justify-center items-center text-3xl tracking-wider font-bold z-20 w-full">
            {character.bounty}
          </p>
        </motion.div>
      </div>
    </motion.a>
  );
};

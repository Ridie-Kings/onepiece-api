import { Link } from "react-router-dom";
export const Card = ({ character }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            to={`/characters/${character.id}`}
            relative="path"
            state={{ character }}
            className="relative w-[336px] h-[475px] p-6 flex flex-col place-content-evenly gap-14"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img
                src="./images/poster.png"
                alt=""
                className='absolute w-full h-auto top-0 left-0 object-cover rounded-lg z-10'
            />
            <div
                style={{ zIndex: isHover ? 20 : 0  }}
                className="flex items-center justify-center relative aspect-[4/3]"
                >
                <img
                    src={
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401"
                    }
                    alt={character.name}
                    style={{ opacity: isHover ? 0 : 1, zIndex: isHover ? -20 : 0  }}
                    className="w-full h-full object-cover absolute top-12"
                />
                <img
                    src={character.image}
                    alt={character.name}
                    style={{ opacity: isHover ? 1 : 0, transform: isHover? 'scale(1.5)' : 'scale(0.8)'  }}
                    className="w-full h-full object-contain absolute transition-all  duration-500"
                />
            </div>
            <div className='relative flex flex-col text-[#4d2a24] z-20 opacity-85'>
                <p className="flex justify-center items-center text-sm gap-1">
                    {character.crew?.name || 'No Crew'}
                </p>
                <h2 className="text-2xl font-bold tracking-widest text-center uppercase">
                    {character.name.toUpperCase()}
                </h2>
                <p className="text-red-900 flex flex-row justify-center items-center text-3xl tracking-wider font-bold z-20">
                    {character.bounty}
                </p>
            </div>
        </Link>
    );
};

import PropTypes from 'prop-types';
import { useState } from 'react';

Card.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        imagebg: PropTypes.string,
        name: PropTypes.string.isRequired,
        bounty: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        haki: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ),
        origin: PropTypes.shape({
            name: PropTypes.string
        }),
        crew: PropTypes.shape({
            name: PropTypes.string
        })
    }).isRequired
};
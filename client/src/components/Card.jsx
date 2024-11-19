import { Anchor } from 'lucide-react';
import { Link } from "react-router-dom";
export const Card = ({ character }) => {
    return (
        <Link
            to={`/characters/${character.id}`}
            relative="path"
            state={{ character }}
            className="w-80 p-8 text-center bg-[#fffef0] paper"
        >
            <div className="text-3xl text-gray-800 font-serif mb-4">
                <h2 className="text-6xl">WANTED</h2>
            </div>
            <div className="flex items-center justify-center mb-4 group relative aspect-[4/3]">
                <img
                    src={
                        character.imagebg ||
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401"
                    }
                    alt={character.name}
                    className="w-full h-full object-cover absolute group-hover:opacity-0 transition-opacity duration-500"
                />
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-contain absolute opacity-0 group-hover:opacity-100 transition-all hover:scale-150  duration-500"
                />
            </div>
            <div>
                <h3 className="text-3xl tracking-wider">DEAD OR ALIVE</h3>
                <h2 className="text-2xl font-bold mb-2 tracking-wider uppercase">
                    {character.name.toUpperCase()}
                </h2>
                <div className="bg-red-800/90 text-yellow-500 rounded-lg p-2 mb-4">
                    <div className="text-lg font-bold">
                        Bounty: {character.bounty}
                    </div>
                </div>
                <p className="flex justify-center items-center text-base text-gray-800 gap-1">
                    <Anchor className="w-5 h-5" />
                    <strong>Crew:</strong> {character.crew?.name || 'No Crew'}
                </p>
            </div>
        </Link>
    );
};

import PropTypes from 'prop-types';

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
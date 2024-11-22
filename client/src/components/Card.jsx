import { Anchor } from 'lucide-react';
import { Link } from "react-router-dom";
export const Card = ({ character }) => {
    return (
        <Link
            to={`/characters/${character.id}`}
            relative="path"
            state={{ character }}
            className="relative w-80 h-[29rem] p-6"
        >
            <img
                src="./images/poster.png"
                alt=""
                className='absolute w-full h-full top-0 left-0 object-cover rounded-lg z-10 group'
            />
            <div className="flex items-center justify-center mb-4  relative aspect-[4/3] ">
                <img
                    src={
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
            <div className='text-yellow-950'>
                <h2 className="text-xl font-bold tracking-widest uppercase">
                    {character.name.toUpperCase()}
                </h2>
                <div className="text-red-800 rounded-lg p-1">
                    <div className="flex flex-row justify-center items-center text-4xl tracking-wider font-bold z-20">
                        {character.bounty}
                    </div>
                </div>
                <p className="flex justify-center items-center text-base gap-1">
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
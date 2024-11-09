import { Anchor } from 'lucide-react';
export const Card = ({ character }) => {
    return (
        <article className="border rounded-lg w-64 h-96 p-5 text-center bg-yellow-500">
            <div className="text-2xl">
                <h2>WANTED</h2>
                <h3>Dead or Alive</h3>
            </div>
            <div className="flex items-center justify-center border">
                <img className="w-40 h-52 -mt-4 rounded-lg transition-transform duration-500 p-[10px] hover:p-0 hover:origin-rigth hover:skew-y-3 hover:scale-110 " src={character.image} alt={character.name} />
            </div>
            <div className="">
                <h2 className="text-lg my-2">{character.name}</h2>
                <div className="bg-red-800/90 text-yellow-500 rounded mb-2"><p className="text-lg font-bold my-2">Bounty: {character.bounty}</p></div>
                <p className='flex justify-center items-center text-base my-1'> <Anchor className='size-4 mr-1' /><strong>Crew:</strong> {character.crew?.name || 'No Crew'}</p>
            </div>
        </article>
    );
}

import PropTypes from 'prop-types';

Card.propTypes = {
    character: PropTypes.shape({
        image: PropTypes.string.isRequired,
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
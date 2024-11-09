export const Card = ({ character }) => {
    return (
        <article className="border border-solid border-x-amber-900 rounded-lg w-64 p-5 text-center ">
            <div className="text-2xl">
                <h2>WANTED</h2>
                <h3>Dead or Alive</h3>
            </div>
            <div className="">
                <img className='w-full h-80 rounded-lg border' src={character.image} alt={character.name} />
            </div>
            <div className="">
                <h2 className="text-lg my-2">{character.name}</h2>
                <p className="text-lg font-bold my-2">Bounty: {character.bounty}</p>
                <p className='text-base my-1'><strong>Crew:</strong> {character.crew?.name || 'No Crew'}</p>
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
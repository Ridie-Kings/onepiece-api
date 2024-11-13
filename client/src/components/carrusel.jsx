export const Carrusel = ({ crew }) => {
  console.log(crew);
  return (
    <section className="flex w-full h-[600px] overflow-x-auto py-8 px-4 scrollbar-hide">
      {crew.members.map((member) => (
        <div
          key={member.id}
          className="relative group cursor-pointer"
        >
          <img
            src={member.image || 'https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png'}
            alt={member.name}
            className="flex-grow h-96 w-28 object-cover object-top opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:w-80 group-hover:contrast-125"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-400">{member.position}</p>
            <p className="text-sm text-gray-300">{member.bounty} Berris</p>
            <p className="text-sm text-gray-400 mt-2">{member.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

import PropTypes from 'prop-types';

Carrusel.propTypes = {
  crew: PropTypes.shape({
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        bounty: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

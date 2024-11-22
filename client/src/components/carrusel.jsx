import PropTypes from 'prop-types';
import { useState } from 'react';

export const Carrusel = ({ crew }) => {
  const [isOver, setIsOver] = useState(0);
  console.log(isOver);
  return (
    <section className="flex w-full h-[600px] overflow-x-auto py-8 px-4 scrollbar-hide">
      {crew.members.map((member) => (
        <div
          key={member.id}
          className="relative flex items-center group cursor-pointer transition-all duration-500 ease-out overflow-hidden"
          style={{ width: isOver == member.id ? 30 / crew.members.length * 100 + '%' : 10 / crew.members.length * 100 + '%' }}
          onMouseEnter={() => setIsOver(member.id)}
          onMouseLeave={() => setIsOver(0)}
        >
          <img
            src={member.image || 'https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png'}
            alt={member.name}
            className="flex-grow h-96 object-cover object-top opacity-80  group-hover:opacity-100 group-hover:contrast-125"
          />
          <div
            className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ width: '100%' }}
          >
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

Carrusel.propTypes = {
  crew: PropTypes.shape({
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        bounty: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

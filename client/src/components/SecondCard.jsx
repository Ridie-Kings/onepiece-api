import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SecondCard = ({ item, children, height, link }) => {
    return (
        <article
            key={item.id}
            className={`bg-[#fffef0] relative rounded-lg overflow-hidden group cursor-pointer shadow-xl ${height ? "h-[22rem]" : ""} hover:h-auto transition-all duration-500 ease`}
        >
            <div className="relative overflow-hidden" style={{height: children?"12rem":"100%"}}>
                <img
                    src={item.src ?? "https://images.unsplash.com/photo-1534447677768-be436bb09401"}
                    alt={`${item.name} ship`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end py-2">
                    <h2 className="text-3xl font-bold text-white text-center px-4">
                        {item.name}
                    </h2>
                </div>
            </div>
            <div className="p-4">
                {children}
                {link && (
                    <div className="mt-4 text-center">
                        <Link
                            to={`/crews/${item.id}`}
                            state={{ item }}
                            className="text-blue-500 hover:font-bold transition-all duration-200"
                        >
                            View More Details
                        </Link>
                    </div>
                )}
            </div>
            {height &&
                <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t group-hover:opacity-0 transition-opacity duration-200 ease-in-out from-black/50 to-transparent'></div>
            }
        </article>
    );
};

SecondCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string,
    }).isRequired,
    height: PropTypes.bool,
    children: PropTypes.node,
    link: PropTypes.bool,
};

import PropTypes from 'prop-types';

export const ImageTitle = ({ flag, crewImage, text, crewName }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-[300px] bg-[#1f1f1f]">
            <img
                src={crewImage || 'https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png'}
                alt={crewName}
                className="absolute inset-0 object-cover w-full h-full opacity-80"
            />
            <div className="relative flex items-center justify-center w-full h-full text-center gap-8">
                <img
                    src={flag || 'https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png'}
                    alt={crewName}
                    className="w-16 h-16 object-contain"
                />
                <h2 className="text-3xl font-bold text-yellow-500 drop-shadow-lg">{text}</h2>
                <img
                    src={flag || 'https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png'}
                    alt={crewName}
                    className="w-16 h-16 object-contain"
                />
            </div>
        </div>
    );
};

ImageTitle.propTypes = {
    crewImage: PropTypes.string,
    flag: PropTypes.string,
    text: PropTypes.string.isRequired,
    crewName: PropTypes.string.isRequired,
};
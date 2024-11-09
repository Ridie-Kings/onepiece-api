import crews from '../../data/crews.json' with { type: "json" };
import characters from '../../data/characters.json' with { type: "json" };

const getAllCrews = () => {
    const data = crews.map(crew => crew.name);
    return [...new Set(data)];
}

const getCrewById = (id) => {
    const data = crews.find(crew => crew.id === id);
    return data;
}

const getMembersByCrew = (id) => {
    const data = characters.find(character => character.crew === id);
    return [... new Set(data)];
}
export default {
    getAllCrews,
    getCrewById,
    getMembersByCrew
}
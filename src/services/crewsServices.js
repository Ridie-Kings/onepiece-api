import crews from '../../data/crews.json' with { type: "json" };
import characters from '../../data/characters.json' with { type: "json" };

const fillCrewInfo = (crew) => {
    const data = crews.map(crew => {
        const members = characters.filter(character => character.crew === crew.id);
        return { ...crew, members }
    });
    return data;
}
const getAllCrews = () => {
    return fillCrewInfo();

}

const getCrewById = (id) => {
    const data = crews.find(crew => crew.id === id);
    return data;
}

const getMembersByCrew = (id) => {
    const data = characters.filter(character => character.crew === id);
    return [... new Set(data)];
}
export default {
    getAllCrews,
    getCrewById,
    getMembersByCrew
}
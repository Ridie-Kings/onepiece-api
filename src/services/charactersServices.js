import characters from '../../data/characters.json' with { type: "json" };
import races from '../../data/races.json' with { type: "json" };

const getAllCharacters = () => characters;

const getCharacterById = (id) => characters.find(character => character.id === id)

const getAllCrews = () => {
    const crews = characters.map(character => character.crew.name);
    return [...new Set(crews)];
}

const getCrewById = (id) => {
    const data = characters.find(character => character.crew.id === id);
    return data.crew;
}

const getAllRaces = () => {
    const races = characters.map(character => character.race);
    return [...new Set(races)];
}

const getRaceById = (id) => {
    const data = races.find(race => race.name);
    return data;
}

export default {
    getAllCharacters,
    getCharacterById,
    getAllCrews,
    getCrewById,
    getAllRaces,
    getRaceById
}
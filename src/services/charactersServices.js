import characters from '../../data/characters.json' with { type: "json" };

const getAllCharacters = () => characters;

const getCharacterById = (id) => characters.find(character => character.id === id)

const getAllCrews = () => {
    const crews = characters.map(character => character.crew.name);
    return [...new Set(crews)];
}

const getCrewById = (id) => {
    const crew = characters.find(character => character.crew.id === id);
    return crew.crew.name;
}

export default {
    getAllCharacters,
    getCharacterById,
    getAllCrews,
    getCrewById
}
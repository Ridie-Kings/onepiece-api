import characters from '../../data/characters.json' with { type: "json" };

const getAllCharacters = () => characters;

const getCharacterById = (id) => characters.find(character => character.id === id)

export default {
    getAllCharacters,
    getCharacterById
}
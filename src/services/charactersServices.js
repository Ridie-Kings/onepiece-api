import characters from '../../data/characters.json' with { type: "json" };
import crews from '../../data/crews.json' with { type: "json" };
import devilFruits from '../../data/devilFruits.json' with { type: "json" };
import hakis from '../../data/hakis.json' with { type: "json" };
import origins from '../../data/origins.json' with { type: "json" };
import races from '../../data/races.json' with { type: "json" };
import genders from '../../data/gender.json' with { type: "json" };

const fillCharacterInfo = (character) => {
    return {
        ...character,
        gender: genders.find(gender => gender.id === character.gender),
        crew: crews.find(crew => crew.id === character.crew),
        devil_fruit: devilFruits.find(fruit => fruit.id === character.devil_fruit),
        haki: character.haki.map(hakiId => hakis.find(haki => haki.id === hakiId)),
        origin: origins.find(origin => origin.id === character.origin),
        race: races.find(race => race.id === character.race)
    };
};

const getAllCharacters = () => {
    return characters.map(character => fillCharacterInfo(character));
};

const getCharacterById = (id) => {
    const character = characters.find(character => character.id === id);
    return fillCharacterInfo(character);
}

export default {
    getAllCharacters,
    getCharacterById,
}
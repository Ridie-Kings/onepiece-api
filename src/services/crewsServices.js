import crews from '../../data/crews.json' with { type: "json" };
import characters from '../../data/characters.json' with { type: "json" };

const fillCrewInfo = () => {
    const data = crews.map(crew => {
        const members = crew.members.map(member => {
            const character = characters.find(character => character.id === member.id);
            return {
                ...member,
                ...character
            };
        })
        return {
            ...crew,
            members
        };
    });
    return data;
}

const getAllCrews = () => {
    return fillCrewInfo();
}

const getCrewById = (id) => {
    const crew = crews.find(crew => crew.id === id);
    if (!crew || !crew.members) {
        return null;
    }
    const members = crew.members.map(member => {
        const character = characters.find(character => character.id === member.id);
        return {
            id: member.id,
            position: member.position,
            name: character?.name || "Unknown",
            image: character?.image || null
        };
    });
    return { ...crew, members };
};


const getMembersByCrew = (id) => {
    const crew = crews.filter(crew => crew.id === id);
    const members = crew.members.map(member => {
        const character = characters.filter(character => character.id === member.id);
        if (character) {
            return {
                id: member.id,
                position: member.position,
                ...character
            };
        }
        return member;
    });
    return members;
}
export default {
    getAllCrews,
    getCrewById,
    getMembersByCrew
}
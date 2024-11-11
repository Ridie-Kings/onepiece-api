import races from '../../data/races.json' with { type: "json" };

const getAllRaces = () => {
    const data = races.filter(race => race.name);
    return [...new Set(data)];
}

const getRaceById = (id) => {
    const data = races.find(race => race.id === id);
    return data;
}

export default {
    getAllRaces,
    getRaceById,
}
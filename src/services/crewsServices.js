import crews from '../../data/crews.json' with { type: "json" };

const getAllCrews = () => {
    const data = crews.map(crew => crew.name);
    return [...new Set(data)];
}

const getCrewById = (id) => {
    const data = crews.find(crew => crew.id === id);
    return data;
}

export default {
    getAllCrews,
    getCrewById,
}
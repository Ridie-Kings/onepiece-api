import origins from '../../data/origins.json' with { type: "json" };

const getAllOrigins = () => {
    const data = origins.filter(origin => origin.name);
    return [...new Set(data)];
}

const getOriginsById = (id) => {
    const data = origins.find(origin => origin.id === id);
    return data;
}

export default {
    getAllOrigins,
    getOriginsById,
}
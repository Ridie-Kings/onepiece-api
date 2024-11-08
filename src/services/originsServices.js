import origins from '../../data/origins.json' with { type: "json" };

const getAllOrigins = () => {
    const data = hakis.map(origins => origins.name);
    return [...new Set(data)];
}

const getOriginsById = (id) => {
    const data = hakis.find(origins => origins.id === id);
    return data;
}

export default {
    getAllOrigins,
    getOriginsById,
}
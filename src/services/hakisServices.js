import hakis from '../../data/hakis.json' with { type: "json" };

const getAllHakis = () => {
    const data = hakis.map(haki => haki.name);
    return [...new Set(data)];
}

const getHakisById = (id) => {
    const data = hakis.find(haki => haki.id === id);
    return data;
}

export default {
    getAllHakis,
    getHakisById,
}
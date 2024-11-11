import devilFruits from '../../data/devilFruits.json' with { type: "json" };

const getAllDevilFruits = () => {
    const data = devilFruits.filter(fruit => fruit.name);
    return [...new Set(data)];
}

const getDevilFruitById = (id) => {
    const data = devilFruits.find(fruit => fruit.id === id);
    return data;
}

export default {
    getAllDevilFruits,
    getDevilFruitById,
}
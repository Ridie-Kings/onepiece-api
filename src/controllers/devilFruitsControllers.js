import devilFruitsServices from "../services/devilFruitsServices.js";

export const getAllDevilFruits = (req, res) => {
    try {
        const fruits = devilFruitsServices.getAllDevilFruits();
        res.set('Cache-Control', 'public, max-age=86400');
        res.json(fruits);
    } catch (error) {
        res.status(500).send("Error retrieving devil's fruits");
    }
}

export const getDevilFruitById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const fruits = devilFruitsServices.getDevilFruitById(id);
        res.set('Cache-Control', 'public, max-age=86400');
        if (!fruits) {
            res.status(404).send("Devil fruit not found");
            return;
        }
        res.json(fruits);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}


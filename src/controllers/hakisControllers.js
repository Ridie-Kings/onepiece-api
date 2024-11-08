import hakisServices from "../services/hakisServices.js";

export const getAllHakis = (req, res) => {
    try {
        const hakis = hakisServices.getAllHakis();
        res.json(hakis);
    } catch (error) {
        res.status(500).send("Error retrieving hakis");
    }
}

export const getHakisById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const hakis = hakisServices.getHakisById(id);
        if (!hakis) {
            res.status(404).send("Haki not found");
            return;
        }
        res.json(hakis);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}


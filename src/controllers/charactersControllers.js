import charactersServices from "../services/charactersServices.js";

export const getAllCharacters = (req, res) => {
    try {
        const characters = charactersServices.getAllCharacters();
        res.json(characters);
    } catch (error) {
        res.status(500).send("Error retrieving characters");
    }
}

export const getCharacterById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const character = charactersServices.getCharacterById(id);
        if (!character) {
            res.status(404).send("Character not found");
            return;
        }
        res.json(character);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}
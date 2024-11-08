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

export const getAllCrews = (req, res) => {
    try {
        const crews = charactersServices.getAllCrews();
        res.json(crews);
    } catch (error) {
        res.status(500).send("Error retrieving crews");
    }
}

export const getCrewById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const crew = charactersServices.getCrewById(id);
        if (!crew) {
            res.status(404).send("Crew not found");
            return;
        }
        res.json(crew);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}
import charactersServices from "../services/charactersServices.js";

export const getAllCharacters = (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    let characters = charactersServices.getAllCharacters();
    if (!isNaN(limit) && limit > 0) characters = characters.slice(0, limit);
    res.set("Cache-Control", "public, max-age=86400");
    res.json(characters);
  } catch (error) {
    res.status(500).send("Error retrieving characters");
  }
};

export const getCharacterById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).send("ID is not a number");
      return;
    }
    const character = charactersServices.getCharacterById(id);
    res.set("Cache-Control", "public, max-age=86400");
    if (!character) {
      res.status(404).send("Character not found");
      return;
    }
    res.json(character);
  } catch (error) {
    res.status(400).send("Invalid ID supplied");
  }
};

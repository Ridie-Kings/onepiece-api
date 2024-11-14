import racesServices from "../services/racesServices.js";

export const getAllRaces = (req, res) => {
    try {
        const races = racesServices.getAllRaces();
        res.set('Cache-Control', 'public, max-age=86400');
        res.json(races)
    } catch (error) {
        res.status(500).send("Error retrieving races")
    }
}

export const getRaceById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const race = racesServices.getRaceById(id);
        res.set('Cache-Control', 'public, max-age=86400');
        if (!race) {
            res.status(404).send("Crew not found")
            return;
        }
        res.json(race)
    } catch (error) {
        res.status(400).send("Invalid ID supplied")
    }
}
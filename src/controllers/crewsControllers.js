import crewsServices from "../services/crewsServices.js";

export const getAllCrews = (req, res) => {
    try {
        const crews = crewsServices.getAllCrews();
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
        const crew = crewsServices.getCrewById(id);
        if (!crew) {
            res.status(404).send("Crew not found");
            return;
        }
        res.json(crew);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}

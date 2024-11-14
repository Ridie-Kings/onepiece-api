import crewsServices from "../services/crewsServices.js";

export const getAllCrews = (req, res) => {
    try {
        const crews = crewsServices.getAllCrews();
        res.set('Cache-Control', 'public, max-age=86400');
        res.json(crews);
    } catch (error) {
        console.log(error);
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
        res.set('Cache-Control', 'public, max-age=86400');
        if (!crew) {
            res.status(404).send("Crew not found");
            return;
        }
        res.json(crew);
    } catch (error) {
        res.status(400).send("Invalid ID supplied");
    }
}

export const getMembersByCrew = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const members = crewsServices.getMembersByCrew(id);
        res.set('Cache-Control', 'public, max-age=86400');
        if (!members) {
            res.status(404).send("Members not found");
            return;
        }
        res.json(members);
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid ID supplied");
    }
}
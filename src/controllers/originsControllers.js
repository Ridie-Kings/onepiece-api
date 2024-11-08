import originsServices from "../services/originsServices.js";

export const getAllOrigins = (req, res) => {
    try {
        const origins = originsServices.getAllOrigins();
        res.json(origins)
    } catch (error) {
        res.status(500).send("Error retrieving origins")
    }
}

export const getOriginsById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send("ID is not a number");
            return;
        }
        const origin = originsServices.getOriginsById(id);
        if (!origin) {
            res.status(404).send("Crew not found")
            return;
        }
        res.json(origin)
    } catch (error) {
        res.status(400).send("Invalid ID supplied")
    }
}
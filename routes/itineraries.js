import { Router } from "express";
import read from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import update from "../controllers/itineraries/update.js";
import destroy from "../controllers/itineraries/destroy.js";
import readOne from "../controllers/itineraries/readOne.js";

const itinerariesRouter = Router()

//CREATE
itinerariesRouter.post('/',create)

//READ
itinerariesRouter.get('/',read)

//READ ONE
itinerariesRouter.get('/:id',readOne)

//UPDATE
itinerariesRouter.put('/:id',update)

//DELETE
itinerariesRouter.delete('/:id',destroy)

export default itinerariesRouter
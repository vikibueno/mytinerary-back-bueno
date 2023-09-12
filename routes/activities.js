import { Router } from "express";

import create from "../controllers/activities/create.js";
import read from "../controllers/activities/read.js";
import readOne from "../controllers/activities/readOne.js";
import update from "../controllers/activities/update.js";
import destroy from "../controllers/activities/destroy.js";

const activitiesRouter = Router()

//CREATE
activitiesRouter.post('/',create)

//READ
activitiesRouter.get('/',read)

//READ ONE
activitiesRouter.get('/:id',readOne)

//UPDATED
activitiesRouter.put('/:id',update)

//DELETE
activitiesRouter.delete('/:id',destroy)

export default activitiesRouter
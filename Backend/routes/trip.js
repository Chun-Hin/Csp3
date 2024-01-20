import express from "express";
import authorize from "../middlewares/auth.js";

import {
    createTrip,
    getTrips,
    getTrip,
    updateTrip,
    deleteTrip
} from "../controllers/trip.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createTrip)

// get all
router.get('/', getTrips);

// get by id
router.get('/:id', getTrip);

// update one
router.patch('/:id', updateTrip)

// delete one
router.delete('/:id', deleteTrip)
export default router;

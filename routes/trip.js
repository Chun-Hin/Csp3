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
router.post('/', authorize('admin'), createTrip)

// get all
router.get('/', authorize('admin'), getTrips);

// get by id
router.get('/:id', authorize('admin'), getTrip);

// update one
router.patch('/:id', authorize('admin'), updateTrip)

// delete one
router.delete('/:id', authorize('admin'), deleteTrip)
export default router;

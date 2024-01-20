import express from "express";

import {
    getUsers
} from "../controllers/users.js";
const router = express.Router();
// Create a new router (endpoints)

// get all
router.get('/', getUsers);
export default router;

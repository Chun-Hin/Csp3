import express from "express";
import {
    createClassmate,
    getClassmates,
    getClassmate,
    updateClassmate,
    deleteClassmate
} from "../controllers/classmate.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createClassmate)

// get all
router.get('/', getClassmates)

// get by id
router.get('/:id', getClassmate)

// update one
router.patch('/:id', updateClassmate)

// delete one
router.delete('/:id', deleteClassmate)
export default router;

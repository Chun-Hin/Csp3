import express from "express";
import {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/customer.js";

// Create a new router (endpoints)
const router = express.Router();

// create
router.post('/', createCustomer)

// get all
router.get('/', getCustomers)

// get by id
router.get('/:id', getCustomer)

// update one
router.patch('/:id', updateCustomer)

// delete one
router.delete('/:id', deleteCustomer)
export default router;

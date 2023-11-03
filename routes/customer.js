import express from "express";
import authorize from "../middlewares/auth.js";
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
router.post('/', authorize('admin'), createCustomer);

// get all
router.get('/', authorize('user'), getCustomers);

// get by id
router.get('/:id', authorize('user'), getCustomer);

// update one
router.patch('/:id', authorize('user'), updateCustomer);

// delete one
router.delete('/:id', authorize('user'), deleteCustomer);


export default router;

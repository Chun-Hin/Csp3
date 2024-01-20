import express from "express";
import { logoutUser } from "../../controllers/auth/login.js";


const router = express.Router();

// login
router.post('/', logoutUser)

export default router;

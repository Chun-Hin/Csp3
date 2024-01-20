import userSchema from "../models/user.js";

// get all
export const getUsers = async (req, res) => {
    try {
        const trip = await userSchema.find();
        res.json(trip)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}





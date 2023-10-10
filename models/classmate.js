import mongoose from "mongoose";

const classmateSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Age: {
        type: String,
        required: true
    }
});


export default mongoose.model("Classmate", classmateSchema);

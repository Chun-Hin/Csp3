import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Age: {
        type: String,
        required: true
    }
});


export default mongoose.model("Customer", customerSchema);

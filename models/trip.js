import mongoose from "mongoose";


const tripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Customer'
    }
});

export default mongoose.model('Trip', tripSchema);
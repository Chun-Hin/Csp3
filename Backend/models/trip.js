import mongoose from "mongoose";


const tripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
}, {
    toObject: {virtuals:true},
});

tripSchema.virtual('user', {
    ref: 'User',
    localField: 'customerId',
    foreignField: '_id',
    justOne: true
});

export default mongoose.model('Trip', tripSchema);
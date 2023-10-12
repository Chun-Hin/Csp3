import tripSchema from "../models/trip.js";

//create one
export const createTrip = async (req, res) => {
    const trip = new tripSchema({
        destination: req.body.destination,
        customerId: req.body.customerId
    });

    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all
export const getTrips = async (req, res) => {
    try {
        const trip = await tripSchema.find().populate('customerId');
        res.json(trip)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getTrip = async (req, res) => {
    try {
        const trip = await tripSchema.findById(req.params.id).populate("destination").populate("customerId");
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ trip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateTrip = async (req, res) => {
    const {id} = req.params;
    const {destination, customerId} = req.body;

    try {
        const trip = await tripSchema.findById(id);
        if (destination) {
            trip.destination = destination;
        }
        if (customerId) {
            trip.customerId = customerId;
        }
        await trip.save();
        res.status(200).json({success: true, data: trip});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteTrip = async (req, res) => {
    try {
        const deletedTrip = await tripSchema.findByIdAndDelete(req.params.id);
        if (!deletedTrip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ deletedTrip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




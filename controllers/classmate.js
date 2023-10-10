import classmateSchema from "../models/classmate.js";

//create one
export const createClassmate = async (req, res) => {
    const classmate = new classmateSchema({
        Name: req.body.Name,
        Age: req.body.Age
    })
    try {
        const newClassmate = await classmate.save()
        res.status(201).json(newClassmate)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// get all
export const getClassmates = async (req, res) => {
    try {
        const classmate = await classmateSchema.find()
        res.json(classmate)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getClassmate = async (req, res) => {
    try {
        const classmate = await classmateSchema.findById(req.params.id).populate("Name").populate("Age");
        if (!classmate) {
            return res.status(404).json({ message: "classmate not found" });
        }
        res.status(200).json({ classmate });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateClassmate = async (req, res) => {
    const {id} = req.params;
    const {Name, Age} = req.body;

    try {
        const classmate = await classmateSchema.findById(id);
        if (Name) {
            classmate.Name = Name;
        }
        if (Age) {
            classmate.Age = Age;
        }
        await classmate.save();
        res.status(200).json({success: true, data: classmate});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteClassmate = async (req, res) => {
    try {
        const deletedClassmate = await classmateSchema.findByIdAndDelete(req.params.id);
        if (!deletedClassmate) {
            return res.status(404).json({ message: "Classmate not found" });
        }
        res.status(200).json({ deletedClassmate });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




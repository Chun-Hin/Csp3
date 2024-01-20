// controllers/userController.js
import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import Class from "../../models/class.js";

export const registerUser = async (req, res) => {
    const { username, password, className, subjectId, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        let classObject;

        if (className) {
            classObject = await Class.findOne({ classname: className });

            if (!classObject) {
                return res.status(400).json({ message: 'Class not found' });
            }
        }

        const user = new User({ username, password: hashedPassword, class: classObject ? classObject._id : null, subjectId, role });

        await user.save();

        res.status(201).json({ message: 'User added' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get all
export const getUsers = async (req, res) => {
    try {
        // Ensure that the 'subjects' virtual field is registered
        User.schema.virtual('subjects', {
            ref: 'Subject',
            localField: 'subjectId',
            foreignField: '_id',
        });

        const docenten = await User.find({ role: 'docent' }).populate('subjects', 'subjectname');

        const formattedDocenten = docenten.map((docent) => {
            return {
                username: docent.username,
                subjects: docent.subjects ? docent.subjects.map(subject => subject.subjectname) : [],
            };
        });

        res.json(formattedDocenten);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};





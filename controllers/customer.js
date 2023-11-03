import customerSchema from "../models/customer.js";

//create one
export const createCustomer = async (req, res) => {
    const customer = new customerSchema({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// get all
export const getCustomers = async (req, res) => {
    try {
        const customer = await customerSchema.find()
        res.json(customer)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// get one
export const getCustomer = async (req, res) => {
    try {
        const customer = await customerSchema.findById(req.params.id).populate("name").populate("age");
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json({ customer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update one
export const updateCustomer = async (req, res) => {
    const {id} = req.params;
    const {Name, Age} = req.body;

    try {
        const customer = await customerSchema.findById(id);
        if (Name) {
            customer.Name = Name;
        }
        if (Age) {
            customer.Age = Age;
        }
        await customer.save();
        res.status(200).json({success: true, data: customer});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

// delete one
export const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await customerSchema.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: "Klant niet gevonden" });
        }
        res.status(200).json({ deletedCustomer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




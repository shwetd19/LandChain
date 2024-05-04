const User = require('../models/userModel');

const signupController = async (req, res) => {
    try {
        const user = new User(req.body);
        // Disable validation before saving
        user.$validateBeforeSave = false;
        await user.save();
        res.status(201).send("User created successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
};

module.exports = signupController;

const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const signinController = async (req, res) => {
    try {
        const { emailAddress, password } = req.body;
        const user = await User.findOne({ emailAddress });
        if (!user) {
            return res.status(404).send("User not found");
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).send("Invalid password");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); 
        res.status(200).send({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error signing in");
    }
};

module.exports = signinController;

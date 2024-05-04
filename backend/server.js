const express = require('express');
const mongoose = require('mongoose');
const signupRoutes = require('./routes/signupRoutes');
const signinRoutes = require('./routes/signinRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.use(express.json());
app.use(signupRoutes);
app.use(signinRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

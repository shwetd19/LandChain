const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set port from environment variable or use 3000 by default

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

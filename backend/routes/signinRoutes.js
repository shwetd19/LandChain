const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signinController');

router.post('/signin', signinController);

module.exports = router;

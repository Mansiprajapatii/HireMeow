const express = require('express');
const router = express.Router();
const {fetch, login} = require('../Controllers/mainController')

router.get('/test', fetch);
router.post('/login', login );

module.exports = router;

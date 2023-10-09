const express = require('express');
const router = express.Router();
const {fetch, login} = require('../Controllers/mainController');
const { signin, signup } = require('../Controllers/userController');

router.get('/test', fetch);
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;

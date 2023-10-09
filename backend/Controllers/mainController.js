const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.fetch = async (req, res)=>{
    res.send('OK').status(200)
};
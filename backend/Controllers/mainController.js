const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.fetch = async (req, res)=>{
    res.send('OK').status(200)
};

exports.login = async (req, res)=>{
    const { email, pass } = req.body;
    console.log(email, pass);

    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    if (email == "test" && pass == "pass") {
        const token = jwt.sign({ email: email }, jwtSecretKey, { expiresIn: "6h" });
        res.json({ token: token, email: email });
    } else {
        res.sendStatus(401);
    }
}


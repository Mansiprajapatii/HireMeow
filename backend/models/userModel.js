// import { Express } from "express";
const mongoose = require('mongoose')

const user = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    pass : String,
    email:{
        type: String,
        require: true
    }
    
})


module.exports = mongoose.model('userSignup', user);
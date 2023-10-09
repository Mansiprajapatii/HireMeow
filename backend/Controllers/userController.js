const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const SECRET_KEY = 'SUperSecureKey';

exports.signin = async (req,res)=>{

    const {email, pass} = req.body;


   try {
    const isUsrExist = await userModel.findOne({email:email});
 
    if(!isUsrExist){
        return res.status(404).json({message: "user not found"})
    }

    const passMatch = await bcrypt.compare(pass, isUsrExist.pass);

    if(!passMatch){
        return res.status(400).json({message:"invalid credentials"})
    }

    const token = jsonWebToken.sign({email:isUsrExist.email, id:isUsrExist._id}, SECRET_KEY)
    res.status(200).json({user: isUsrExist, token:token})

   }catch (error) {
    console.log(error)
    res.status(400).json({error:error})
   }
}

exports.signup = async (req, res) =>{

    const {email, userName, pass} = req.body;


    try {
        
        const existingUser = await userModel.findOne({email:email});
        if (existingUser){
            return res.status(400).json({message:"user already exists"});
        }   

        const hashedPass = await bcrypt.hash(pass, 10)

        const result = await userModel.create({
            userName : userName,
            pass : hashedPass,
            email : email
        });

        const token = jsonWebToken.sign({email: result.email, id: result._id}, SECRET_KEY)
        res.status(201).json({result:result, token:token})
        

    } catch (error) { 
        console.log(error)
        res.status(500).json({error:error})
    }

    

}
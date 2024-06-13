const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const validateToken = require("../middleware/validateTokenHandler");

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(404);
        throw new Error("All field are mandatory");
    }
    const hashedPassword= await bcrypt.hash(password,10)
    console.log(hashedPassword);
    const userAvailable = await User.findOne({email:email});
    if(userAvailable){
        res.status(404);
        throw new Error("user already registered")
    }
    const user= new User({username,email,password:hashedPassword});
    const data=await user.save();
    res.json({message:"Register the user", data:user});
})

const getRegisterUser=asyncHandler(async(req,res)=>{
    res.json(await User.find())
})

const loginUser=asyncHandler(async(req,res)=>{

    const{email,password}=req.body;
    if(!email||!password){
        res.status(404);
        throw new Error("email or password not found");
    }
    const user=await User.findOne({email});
    if(user&& await  bcrypt.compare(password,user.password)){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.JWT, {expiresIn:"1m"})
        res.status(200).json({accessToken})
    }
    else{
        res.send(400).json({msg:"email or password is invalid"})
    }

    res.json({message:"Register the user"});
})


const currentUser=asyncHandler(  async(req,res)=>{
    console.log("one the current user")
    res.json({message:"current user info"});
})

module.exports={registerUser,loginUser,currentUser,getRegisterUser};
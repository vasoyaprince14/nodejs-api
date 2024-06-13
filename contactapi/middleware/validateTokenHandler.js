const asyncHandler=require('express-async-handler');
const jwt= require('jsonwebtoken');


const validateToken=asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.authorization||req.header.Authorization;
    if(authHeader&& authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token,process.env.JWT,(err,decoded)=>{
            if(err){
                res.status(404);
                throw new Error("user is not authorized");
            }
            console.log(decoded);
            
        })
    }
    console.log("one the next")
    next();
})



module.exports=validateToken
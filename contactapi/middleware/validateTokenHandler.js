const asyncHandler=require('express-async-handler');
const jwt= require('jsonwebtoken');


const validateToken = asyncHandler(async(req,res,next)=>{
    console.log("auth route")
    console.log('req in middleware',req.body);
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
            req.user=decoded.user;
            next();

        })
    }
    

  if(!token){
    res.status(401);
    throw new Error("User is not authorised ");
  }
})



module.exports=validateToken
const jwt=require("jsonwebtoken")
const asyncHandler=require("express-async-handler")
const User=require("../models/userModels")

const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
     //Get token form header
     try{
        token=req.headers.authorization.split(" ")[1]


        //Verified token
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        //GET user from the token
    
        req.user=await User.findById(decoded.id).select("-password")
        // console.log(req.user)

        next()

     }
     catch(err){
        console.log(error)
        res.status(401)
        throw new Error("Not Authorised")

     }
   

    }

    if(!token){
        res.status(401)
        throw new Error("Not athorised,no token")
    }

})

module.exports={protect}
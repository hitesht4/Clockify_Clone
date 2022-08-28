const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const asyncHandler=require("express-async-handler")
const User=require("../models/userModels")





//desc Register new admin
//@route POST /api/users
//@access Public

const registerUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(400)
        throw new Error("Please add all fields")
    }


//Check if Usaer Exist
const userExists=await User.findOne({email})
if(userExists){
    res.status(400)
    throw new Error("User is Already Exist")
}

//Hash password
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)


//Create user

const user=await User.create({

    email,
    password:hashedPassword
})
// console.log(user)

if(user){
    res.status(201).json({
        _id:user.id,
     
        email:user.email,
        token:generateToken(user._id)

    })
   
}
else{
    res.status(400)
    throw new Error("Invalid user Data")
}
    
})

//desc Authenticate a new  admin
//@route POST /api/users/login
//@access Public

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    // console.log(user)
    if(user&&(await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
          
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid credentials")
    }
    

})


//desc getUserData new admin
//@route GET /api/users/me
//@access Private

const getMe=asyncHandler(async(req,res)=>{
  
   res.status(200).json(req.user)
})


//Generate JWT
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"20d",

    })
}

module.exports={registerUser,loginUser,getMe}
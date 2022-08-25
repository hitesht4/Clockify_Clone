

const express=require("express")
const router=express.Router()

const {registerUser,loginUser}=require("../controller/usercontroller")
router.post("/",registerUser)
router.post("/login",loginUser)

// router.get("/me",protect,getMe)
// router.post("/",registerUser)


module.exports=router
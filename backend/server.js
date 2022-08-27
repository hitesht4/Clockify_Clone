
const path=require("path")
const express =require("express")
const colors=require("colors")
const dotenv=require("dotenv").config()
const port=process.env.PORT || 4000
const {errorHandle}=require("./middleware/errorMiddleware")
const connectDB=require("./config/db")

connectDB()
const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use("/api/goals",require("./routes/goalRoutes"))
app.use("/api/users",require("./routes/userRoutes"))

//server Frontend
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../clockify/build")))
    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'../','clockify','build','index.html')))

}
else{
    app.get('/',(req,res)=>res.send("Please Set to Production"))
}

app.use(errorHandle)

app.listen(port,()=>console.log(`Server stated on port ${port}`))



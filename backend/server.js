const express=require("express")
const connectDB = require("./config/db")
const colors=require("colors")
const { errorHandle } = require("./middleware/errormiddleware")
const dotenv=require("dotenv").config()
const port=process.env.PORT||5000

connectDB()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/users",require("./routes/userroutes.js"))

app.use(errorHandle)




app.listen(port,()=>console.log(`Server stated on port ${port}`))
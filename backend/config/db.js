const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
  console.log(`MONGODB Connected:${conn.connection.host}`.cyan.underline)
    }
    catch(err){
  console.log(err)
  process.exit(1)
    }
}
module.exports=connectDB
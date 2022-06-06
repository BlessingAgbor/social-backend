const mongoose = require("mongoose")
require("dotenv").config()
// const url=process.env.LOCAL_URL
const cloud = process.env.CLOUD_URL
mongoose.connect(cloud).then(()=>{
console.log("Connected to mongoose...!");
}).catch((err)=>{
    console.log(err.message)
})
module.exports= mongoose;
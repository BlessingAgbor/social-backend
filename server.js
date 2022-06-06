require("./utils/db")
const express = require("express")
require("dotenv").config()
const port = process.env.PORT || 9000;
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("Welcome to Social App Backend")
})
app.listen(port, ()=>{
    console.log("Listening to port: ", port)
})



require("./utils/db")
const express = require("express")
const port = 9000;
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("Welcome to Social App")
})
app.listen(port, ()=>{
    console.log("Listening to port: ", port)
})


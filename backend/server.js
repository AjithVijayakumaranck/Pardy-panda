const express = require("express")
const app = express()
const cors = require("cors")
const fileRouter = require("./Routes/ImageRoutes.js")
const dotenv = require("dotenv")
const path = require("path")


const Connect = require('./Connection/db')

//cors
app.use(cors())
app.use(express.json())





//db connect
console.log("ing db");
dotenv.config()
Connect()


//routesmain
app.use('/api',fileRouter)

//server port
app.listen(5000,()=>{
    console.log('server connected at port 5000');
})
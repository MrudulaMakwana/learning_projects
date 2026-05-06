const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const User=require('./models/userModel.js')

mongoose.connect(process.env.URI).then(() => {
    console.log("Connected.....")
    app.listen(process.env.PORT || 8000,(error)=>{
        if(error) console.log(error);
        console.log("Running successfully");
        
    })
}).catch((error) => {
    console.log("Error", error)
})

// Create
app.post('/', (req, res) => {

})

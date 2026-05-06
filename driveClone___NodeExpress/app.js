import express from "express";
import { userRoute } from "./routes/user.routes.js";
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import cookieParser from "cookie-parser";
import { indexRouter } from "./routes/index.routes.js";

dotenv.config();
connectDB();
const app=express();
app.set('view engine',"ejs");

// body mathi data parse kari sake aetle use thase 2 middleware
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extends:true}))


app.use('/',indexRouter)
app.use('/user',userRoute);


app.listen(2000,()=>{
    console.log("Server is runnig");
    
})

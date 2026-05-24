import express from "express";


export const indexRouter=express.Router();

indexRouter.get('/home',(req,res)=>{
    res.render('home')
})



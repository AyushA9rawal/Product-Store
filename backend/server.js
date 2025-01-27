import express from 'express'
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import { connect } from 'mongoose';

dotenv.config();

const app=express()

app.get("/products",(req,res)=>{} )

app.listen(5000, ()=>{
    connectDB();
    console.log('Server started at http://localhost:5000 hello')
});
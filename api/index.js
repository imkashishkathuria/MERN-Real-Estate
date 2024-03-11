import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path : "\.env"});
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Unable to connect to database",err);
})
const app=express();

app.listen(3000,()=>{
    console.log("Server running inport 3000");
});
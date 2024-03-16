import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./Routes/User_routes";
import router from "./Routes/User_routes.js";

dotenv.config({path : "\.env"});
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Unable to connect to database",err);
})
const app=express();

app.listen(3000,()=>{
    console.log("Server running in port 3000");
});

app.use("/api/user",router);



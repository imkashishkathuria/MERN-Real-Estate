import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./Routes/User_routes";
import router from "./Routes/User_routes.js";
import router1 from "./Routes/auth_routes.js";
import router4 from "./Routes/listingRoutes.js";
import cookieParser from "cookie-parser";


dotenv.config({path : "\.env"});
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Unable to connect to database",err);
})
const app=express();
app.use(express.json());

app.use(cookieParser());    

app.listen(3000,()=>{
    console.log("Server running in port 3000");
});

app.use("/api/user",router);
app.use("/api/auth",router1);
app.use("/api/listing",router4);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message || "Internal Server error!";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});

import express from "express";
import { signin, signup } from "../controllers/auth_controllers.js";
const router1=express.Router();
router1.post("/signup",signup);
router1.post("/signin",signin);
export default router1;
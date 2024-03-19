import express from "express";
import { google, signin, signup } from "../controllers/auth_controllers.js";
const router1=express.Router();
router1.post("/signup",signup);
router1.post("/signin",signin);
router1.post("/google",google);
export default router1;
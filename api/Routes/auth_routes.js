import express from "express";
import { google, signin, signout, signup } from "../controllers/auth_controllers.js";
const router1=express.Router();
router1.post("/signup",signup);
router1.post("/signin",signin);
router1.post("/google",google);
router1.get("/signout",signout);
export default router1;
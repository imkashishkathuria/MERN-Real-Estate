import express from "express";
import { signup } from "../controllers/auth_controllers.js";
const router1=express.Router();
router1.post("/signup",signup);
export default router1;
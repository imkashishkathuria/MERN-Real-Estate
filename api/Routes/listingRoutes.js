import express from 'express';
import { createListing } from '../controllers/listingControllers.js';
import { verifyToken } from '../utils/verifyUser.js';

const router4=express.Router();

router4.post("/create",createListing);
export default router4;
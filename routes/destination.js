import express from "express";
import { createdestination } from "../controllers/tourController.js";

const router = express.Router();

router.post("/", createdestination);

export default router;

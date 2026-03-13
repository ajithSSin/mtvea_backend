import express from "express";
import {
  createRegistration,
  getAllRegistrations
} from "../controllers/registrationController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* PUBLIC ROUTE (USER REGISTRATION) */
router.post("/registration", createRegistration);

/* ADMIN ROUTE (VIEW ALL PARTICIPANTS) */
router.get("/registrations", authMiddleware, getAllRegistrations);

export default router;
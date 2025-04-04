import express from "express";
import { login, logout, signup, authCheck } from "../controllers/auth.controller.js"; // Added authCheck
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck); // Now authCheck is defined

export default router;
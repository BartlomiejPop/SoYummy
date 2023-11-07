import express from "express";
import ctrlAuth from "../../controllers/auth.js";

const router = express.Router();

router.post("/register", ctrlAuth.register);

router.post("/login", ctrlAuth.login);

export default router;

import express from "express";
import ctrlAuth from "../../controllers/auth.js";
import ctrEmail from "../../controllers/mailer.js";

const router = express.Router();

router.post("/sendEmail", ctrlAuth.auth, ctrEmail.sendEmail);

export default router;

// const express = require("express");
import express from "express";
const router = express.Router();
// const ctrlAuth = require("../../redux/auth/operations.js");
// const BASE_URL = "http://localhost:3000";
// import { registerUser } from "../../redux/auth/slice";
// const { registerUser } = require("../../redux/auth/slice.js");
import User from "../../schemas/user.js";
import jwt from "jsonwebtoken";
const secret = "secret";

router.post("/register", async (req, res, next) => {
	const { email, password, name } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		return res.status(409).json({
			status: "error",
			code: 409,
			message: "Email in use",
			data: "Conflict",
		});
	}
	try {
		const newUser = new User({
			name,
			email,
		});
		newUser.setPassword(password);
		await newUser.save();
		return res.status(201).json({
			status: "success",
			code: 201,
			data: {
				message: "Registration successful. Check your email to verify",
			},
		});
	} catch (error) {
		res.status(400).json({
			status: "Bad Request",
			code: 400,
			data: {
				message: "Registration failed",
			},
		});
		next(error);
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user || !user.validPassword(password)) {
		return res.status(401).json({
			status: "error",
			code: 401,
			message: "Incorrect login or password",
			data: "Bad request",
		});
	}
	try {
		const payload = {
			id: user.id,
			name: user.name,
		};

		const token = jwt.sign(payload, secret, { expiresIn: "1h" });
		user.token = token;
		await user.save();

		return res.status(200).json({
			status: "success",
			code: 200,
			data: {
				token: token,
				user: {
					email: email,
				},
			},
		});
	} catch (err) {
		return res.status(400).json({
			status: "Bad request",
			code: 400,
			message: `Login failed ${err}`,
		});
	}
});

// router.post("/login", ctrlAuth.login);

// router.get("/users/logout", ctrlAuth.auth, ctrlAuth.logout);

export default router;

// const express = require("express");
import express from "express";

// const ctrlAuth = require("../../redux/auth/operations.js");
// const BASE_URL = "http://localhost:3000";
// import { registerUser } from "../../redux/auth/slice";

import User from "../../schemas/user.js";
import jwt from "jsonwebtoken";
import ctrlAuth from "../../controllers/auth.js";
// import { useDispatch } from "react-redux";

// import loginUser from "../../redux/auth/slice.js";
const router = express.Router();
const secret = "secret";
// const dispatch = useDispatch();

router.post("/register", ctrlAuth.register);

router.post("/login", ctrlAuth.login);

// router.post("/login", ctrlAuth.login);

// router.get("/users/logout", ctrlAuth.auth, ctrlAuth.logout);

export default router;

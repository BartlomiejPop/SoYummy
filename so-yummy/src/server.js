// const app = require("./app");
// const mongoose = require("mongoose");
// import { app } from "./app";
// import { mongoose } from "./mongoose";

// const express = require("express");
import express from "express";
// import { logger } from "logger";
import cors from "cors";
import mongoose from "mongoose";
// const logger = require("morgan");
import logger from "morgan";
// const cors = require("cors");
// const mongoose = require("mongoose");
// const passport = require("./config/config-passport");
// const contactsRouter = require("./routes/api/contacts");
// const authRouter = require("./routes/api/auth.js");
import authRouter from "./routes/api/auth.js";
import recipesRouter from "./routes/api/recipes.js";

// const User = require("./schemas/user");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/", recipesRouter);

app.use((_, res, next) => {
	const err = new Error("Not Found");
	res.status(404).json({ message: "Not found" });
	console.log(err);
});

app.use((err, _, res) => {
	res.status(500).json({ message: err.message });
});
// const uriDb = process.env.DB_HOST;

try {
	await mongoose.connect(
		"mongodb+srv://Bartek:123@cluster0.uepqqcq.mongodb.net/",
		{
			dbName: "SoYummy",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
	console.log("Database connection successful");

	app.listen(3000, () => {
		console.log("Server running. Use our API on port: 3000");
	});
} catch (error) {
	console.error("Cannot connect to Mongo Database");
	console.error(error);
	process.exit(1);
}

// export default upload;

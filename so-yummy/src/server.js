import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logger from "morgan";
import authRouter from "./routes/api/auth.js";
import recipesRouter from "./routes/api/recipes.js";
import emailRouter from "./routes/api/sendEmail.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "src/uploads"); // Folder, do którego mają być zapisywane pliki
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
		);
	},
});
export const upload = multer({ storage: storage });

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/", recipesRouter);
app.use("/", emailRouter);

app.use((_, res, next) => {
	const err = new Error("Not Found");
	res.status(404).json({ message: "Not found" });
	console.log(err);
});

app.use((err, _, res) => {
	res.status(500).json({ message: err.message });
});

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
		console.log(`Server running. Use our API on port: 3000`);
	});
} catch (error) {
	console.error("Cannot connect to Mongo Database");
	console.error(error);
	process.exit(1);
}

// export default upload;

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logger from "morgan";
import authRouter from "./routes/api/auth.js";
import recipesRouter from "./routes/api/recipes.js";
import emailRouter from "./routes/api/sendEmail.js";
import bodyParser from "body-parser";
import { promises as fsPromises } from "fs";
import dotenv from "dotenv";
dotenv.config();

const dbURL = process.env.DBURL;
const port = process.env.PORT || 3000;
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const isAccessible = (path) => {
	return fsPromises
		.access(path)
		.then(() => true)
		.catch(() => false);
};

const createFolderIsNotExist = async (folder) => {
	if (!(await isAccessible(folder))) {
		await fsPromises.mkdir(folder, { recursive: true });
	}
};

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/", recipesRouter);
app.use("/", emailRouter);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use((_, res, next) => {
	const err = new Error("Not Found");
	res.status(404).json({ message: "Not found" });
	console.log(err);
});

app.use((err, _, res) => {
	res.status(500).json({ message: err.message });
});

try {
	await mongoose.connect(dbURL, {
		dbName: "SoYummy",
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("Database connection successful");

	app.listen(port, () => {
		createFolderIsNotExist("src/uploads");
		console.log(`Server running. Use our API on port: ${port}`);
	});
} catch (error) {
	console.error("Cannot connect to Mongo Database");
	console.error(error);
	process.exit(1);
}

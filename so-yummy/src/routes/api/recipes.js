import express from "express";
import ctrRecipes from "../../controllers/recipes.js";
import ctrlAuth from "../../controllers/auth.js";
// import { upload } from "../../server.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "tmp");
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "src/uploads"); // Folder, do którego mają być zapisywane pliki
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

router.post(
	"/addImage",
	upload.single("file"),
	ctrlAuth.auth,
	ctrRecipes.addImage
);

router.post("/addRecipe", ctrlAuth.auth, ctrRecipes.create);

router.get("/myRecipes", ctrlAuth.auth, ctrRecipes.get);

router.delete("/remove/:id", ctrlAuth.auth, ctrRecipes.remove);

router.post("/addToFavorites", ctrlAuth.auth, ctrRecipes.addToFavorites);

router.get("/favorites", ctrlAuth.auth, ctrRecipes.getFavorites);

router.patch(
	"/deleteFromFavorites/:id",
	ctrlAuth.auth,
	ctrRecipes.deleteFromFavorites
);

export default router;

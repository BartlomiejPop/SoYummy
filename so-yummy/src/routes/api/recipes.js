import express from "express";
import ctrRecipes from "../../controllers/recipes.js";
import ctrlAuth from "../../controllers/auth.js";

const router = express.Router();

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

router.post(
	"/addImage",
	upload.upload.single("image"),
	ctrlAuth.auth,
	ctrRecipes.addImage
);

export default router;

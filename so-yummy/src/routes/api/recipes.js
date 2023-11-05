import express from "express";
import ctrRecipes from "../../controllers/recipes.js";
import ctrlAuth from "../../controllers/auth.js";

// const ctrlAuth = require("../../redux/auth/operations.js");
// const BASE_URL = "http://localhost:3000";
// import { registerUser } from "../../redux/auth/slice";

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

export default router;

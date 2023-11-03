import express from "express";
import ctrRecipes from "../../controllers/recipes.js";
import ctrlAuth from "../../controllers/auth.js";

// const ctrlAuth = require("../../redux/auth/operations.js");
// const BASE_URL = "http://localhost:3000";
// import { registerUser } from "../../redux/auth/slice";

const router = express.Router();

router.post("/addRecipe", ctrRecipes.create);

router.get("/myRecipes", ctrRecipes.get);

export default router;

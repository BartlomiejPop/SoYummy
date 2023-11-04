import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";
// import dotenv from "dotenv";
// dotenv.config();
// import upload from "../../app.js";
import { fetchMyRecipes } from "./slice.js";

export const addRecipe = createAsyncThunk(
	"addRecipe",
	async (recipe, thunkAPI) => {
		const state = thunkAPI.getState();
		const recipes = state.recipes.myRecipes;
		console.error(recipe);
		const existingRecipe = recipes.find(
			(existingRecipe) => existingRecipe.title === recipe.title
		);

		if (existingRecipe) {
			alert(`${existingRecipe.title} is already in your recipes`);
			return thunkAPI.rejectWithValue("This recipe already exists");
		}
		try {
			const response = await axios.post(
				"http://localhost:3000/addRecipe",
				recipe
			);
			Notiflix.Notify.success("Recipe added");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getMyRecipes = createAsyncThunk(
	"fetchMyRecipes",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("http://localhost:3000/myRecipes");
			const myRecipes = response.data.data;
			console.error(myRecipes);
			return myRecipes;
			// console.error(fetchMyRecipes, myRecipes);
			// fetchMyRecipes({ myRecipes });

			// return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteRecipe = createAsyncThunk(
	"deleteRecipe",
	async (recipeId, thunkAPI) => {
		try {
			const response = await axios.delete(
				`http://localhost:3000/remove/${recipeId}`
			);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addImage = (image) => {
	console.error(image);
};

export const getRecipe = createAsyncThunk(
	"getRecipe",
	async (title, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const recipes = state.recipes.myRecipes;
			const initialRecipes = state.recipes.initialRecipes;
			console.error(title);
			recipes.find((el) => el.title === title);
			const breakfast = initialRecipes.breakfast.find(
				(el) => el.title === title
			);
			const miscellaneous = initialRecipes.miscellaneous.find(
				(el) => el.title === title
			);
			const chicken = initialRecipes.chicken.find((el) => el.title === title);
			const desserts = initialRecipes.desserts.find((el) => el.title === title);
			const pasta = initialRecipes.pasta.find((el) => el.title === title);
			const seafood = initialRecipes.seafood.find((el) => el.title === title);
			const beef = initialRecipes.beef.find((el) => el.title === title);
			const recipe =
				breakfast ||
				miscellaneous ||
				desserts ||
				pasta ||
				seafood ||
				beef ||
				chicken ||
				recipes.find((el) => el.title === title);
			console.error(recipe);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

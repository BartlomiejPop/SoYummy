import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";
// import upload from "../../app.js";

export const addRecipe = createAsyncThunk(
	"addRecipe",
	async (recipe, thunkAPI) => {
		const state = thunkAPI.getState();
		const recipes = state.recipes.myRecipes;
		const existingRecipe = recipes.find(
			(existingRecipe) => existingRecipe.data.recipe.title === recipe.title
		);

		if (existingRecipe) {
			alert(`${existingRecipe.data.recipe.title} is already in your recipes`);
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
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addImage = (image) => {
	console.error(image);
};

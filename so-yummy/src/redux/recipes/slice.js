// import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations.js";

import bananaPancakes from "../../images/bananaPancakes.png";
import hamHockColcannon from "../../images/hamHockColcannon.png";

const initialState = {
	initialRecipes: {
		breakfast: [
			{ name: "Banana pancakes", picture: bananaPancakes },
			{
				name: "ham hock colcannon",
				picture: hamHockColcannon,
			},
		],
	},
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {},
	extraReducers: {},
});

export const recipesReducer = recipesSlice.reducer;

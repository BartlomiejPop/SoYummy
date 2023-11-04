// import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
	addRecipe,
	getMyRecipes,
	deleteRecipe,
	addToFavorites,
	getFavorites,
} from "./operations.js";

//BREAKFAST
import bananaPancakes from "../../images/bananaPancakes.png";
import hamHockColcannon from "../../images/hamHockColcannon.png";
import polishPancakes from "../../images/polishPancakes.png";
import boxtyBreakfast from "../../images/boxtyBreakfast.png";
import englishBreakfast from "../../images/englishBreakfast.png";
import frenchOmlette from "../../images/frenchOmlette.png";
import cheeseSandwich from "../../images/cheeseSandwich.png";

// MISCELLANEOUS
import portugeseCustardTarts from "../../images/portugeseCustardTarts.png";
import portugesePregoPor from "../../images/portugesePregoPor.png";
import stuffedLambTomatoes from "../../images/stuffedLambTomatoes.png";
import salmonEggsBenedict from "../../images/salmonEggsBenedict.png";

//CHICKEN
import teriyakiChickenCasserole from "../../images/teriyakiChickenCasserole.png";
import chickenAlfredoPrimavera from "../../images/chickenAlfredoPrimavera.png";
import potatoGratinWithChicken from "../../images/potatoGratinWithChicken.png";
import piriPiriChickenAndSlaw from "../../images/piriPiriChickenAndSlaw.png";

//DESERTS
import blackberryFool from "../../images/blackberryFool.png";
import chocChipPecanPie from "../../images/chocChipPecanPie.png";
import raspberyBrownies from "../../images/raspberyBrownies.png";
import christmasPuddingTrifle from "../../images/christmasPuddingTrifle.png";
import appleFrangipanTort from "../../images/appleFrangipanTort.png";
import newYorkCheescake from "../../images/newYorkCheescake.png";
import sugarPie from "../../images/sugarPie.png";

//BEEF
import beefAndMustardPie from "../../images/beefAndMustardPie.png";
import braisedBeefChilli from "../../images/braisedBeefChilli.png";
import generalTsosChicken from "../../images/generalTsosChicken.png";
import beefLoMein from "../../images/beefLoMein.png";
import beefBrisketPotRoast from "../../images/beefBrisketPotRoast.png";
import beefBrisketPot from "../../images/beefBrisketPot.png";
import beefSundayRoast from "../../images/beefSundayRoast.png";
import beefDumplingStew from "../../images/beefDumplingStew.png";
import beefDumpling from "../../images/beefDumpling.png";
import beefWellington from "../../images/beefWellington.png";

//SEAFOOD
import sushi from "../../images/sushi.png";

//PASTA
import squashLinguine from "../../images/squashLinguine.png";

const initialState = {
	initialRecipes: {
		breakfast: [
			{ title: "Banana pancakes", picture: bananaPancakes },
			{
				title: "Ham hock colcannon",
				picture: hamHockColcannon,
			},
			{ title: "Polish pancakes", picture: polishPancakes },
			{ title: "Boxty breakfast", picture: boxtyBreakfast },
			{ title: "French omlette", picture: frenchOmlette },
			{ title: "English breakfast", picture: englishBreakfast },
			{ title: "Cheese sandwich", picture: cheeseSandwich },
		],
		miscellaneous: [
			{ title: "Portugese custard tarts", picture: portugeseCustardTarts },
			{ title: "Portugese prego por", picture: portugesePregoPor },
			{ title: "Stuffed lamb tomatoes", picture: stuffedLambTomatoes },
			{
				title: "Salmon eggs benedict",
				picture: salmonEggsBenedict,
				about:
					"Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ",
				time: "20 min",
				recipe: "xd",
				ingredients: "egg, salmon",
			},
		],
		chicken: [
			{
				title: "Teriyaki chicken casserole",
				picture: teriyakiChickenCasserole,
			},
			{
				title: "Chicken Alfredo Primavera",
				picture: chickenAlfredoPrimavera,
			},
			{ title: "Potato gratin with chicken", picture: potatoGratinWithChicken },
			{ title: "Piri-piri chicken and slaw", picture: piriPiriChickenAndSlaw },
		],
		desserts: [
			{ title: "Blackberry fool", picture: blackberryFool },
			{ title: "Choc Chip Pecan Pie", picture: chocChipPecanPie },
			{
				title: "Raspbery brownies",
				picture: raspberyBrownies,
			},
			{ title: "Christmas Pudding Trifle", picture: christmasPuddingTrifle },
			{ title: "Apple frangipan tort", picture: appleFrangipanTort },
			{ title: "New york cheescake", picture: newYorkCheescake },
			{ title: "sugar pie", picture: sugarPie },
		],
		beef: [
			{ title: "Blackberry fool", picture: beefAndMustardPie },
			{ title: "Choc Chip Pecan Pie", picture: braisedBeefChilli },
			{
				title: "Raspbery brownies",
				picture: generalTsosChicken,
			},
			{ title: "Beef lo mein", picture: beefLoMein },
			{ title: "Beef brisket pot roast", picture: beefBrisketPotRoast },
			{ title: "Beef brisket pot", picture: beefBrisketPot },
			{ title: "Beef sunday roast", picture: beefSundayRoast },
			{ title: "Beef dumpling stew", picture: beefDumplingStew },
			{ title: "Beef dumpling", picture: beefDumpling },
			{ title: "Beef wellington", picture: beefWellington },
		],
		seafood: [{ title: "Sushi", picture: sushi }],
		pasta: [{ title: "Squash linguine", picture: squashLinguine }],
	},
	myRecipes: [],
	favoriteRecipes: [],
};

// const handlePending = (state) => {
// 	state.isLoading = true;
// };

// const handleRejected = (state, action) => {
// 	state.isLoading = false;
// 	state.error = action.payload;
// };

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		fetchMyRecipes: (state, action) => {
			state.myRecipes = action.payload;
		},
	},
	extraReducers: {
		// [addRecipe.pending]: handlePending,
		[addRecipe.fulfilled](state, action) {
			state.myRecipes.push(action.payload);
			// state.isLoading = false;
			// state.error = null;
			// if (state.filter !== "") {
			// 	state.filter.push(action.payload);
			// }
		},
		[getMyRecipes.fulfilled](state, action) {
			state.myRecipes = action.payload;
		},
		[deleteRecipe.fulfilled](state, action) {
			const recipeId = action.payload.data._id;
			state.myRecipes = state.myRecipes.filter((el) => el._id !== recipeId);
		},
		[addToFavorites.fulfilled](state, action) {
			state.favoriteRecipes.push(action.payload);
		},
		[getFavorites.fulfilled](state, action) {
			state.favoriteRecipes = action.payload;
		},
		// [addRecipe.rejected]: handleRejected,
	},
});

export const { fetchMyRecipes } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;

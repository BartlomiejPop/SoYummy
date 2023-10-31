// import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import bananaPancakes from "../../images/bananaPancakes.png";
import hamHockColcannon from "../../images/hamHockColcannon.png";
import polishPancakes from "../../images/polishPancakes.png";
import boxtyBreakfast from "../../images/boxtyBreakfast.png";

import portugeseCustardTarts from "../../images/portugeseCustardTarts.png";
import portugesePregoPor from "../../images/portugesePregoPor.png";
import stuffedLambTomatoes from "../../images/stuffedLambTomatoes.png";
import salmonEggsBenedict from "../../images/salmonEggsBenedict.png";

import teriyakiChickenCasserole from "../../images/teriyakiChickenCasserole.png";
import chickenAlfredoPrimavera from "../../images/chickenAlfredoPrimavera.png";
import potatoGratinWithChicken from "../../images/potatoGratinWithChicken.png";
import piriPiriChickenAndSlaw from "../../images/piriPiriChickenAndSlaw.png";

import blackberryFool from "../../images/blackberryFool.png";
import chocChipPecanPie from "../../images/chocChipPecanPie.png";
import raspberyBrownies from "../../images/raspberyBrownies.png";
import christmasPuddingTrifle from "../../images/christmasPuddingTrifle.png";

const initialState = {
	initialRecipes: {
		breakfast: [
			{ name: "Banana pancakes", picture: bananaPancakes },
			{
				name: "Ham hock colcannon",
				picture: hamHockColcannon,
			},
			{ name: "Polish pancakes", picture: polishPancakes },
			{ name: "Boxty breakfast", picture: boxtyBreakfast },
		],
		miscellaneous: [
			{ name: "Portugese custard tarts", picture: portugeseCustardTarts },
			{ name: "Portugese prego por", picture: portugesePregoPor },
			{ name: "Stuffed lamb tomatoes", picture: stuffedLambTomatoes },
			{ name: "Salmon eggs benedict", picture: salmonEggsBenedict },
		],
		chicken: [
			{ name: "Teriyaki chicken casserole", picture: teriyakiChickenCasserole },
			{
				name: "Chicken Alfredo Primavera",
				picture: chickenAlfredoPrimavera,
			},
			{ name: "Potato gratin with chicken", picture: potatoGratinWithChicken },
			{ name: "Piri-piri chicken and slaw", picture: piriPiriChickenAndSlaw },
		],
		desserts: [
			{ name: "Blackberry fool", picture: blackberryFool },
			{ name: "Choc Chip Pecan Pie", picture: chocChipPecanPie },
			{
				name: "Raspbery brownies",
				picture: raspberyBrownies,
			},
			{ name: "christmas Pudding Trifle", picture: christmasPuddingTrifle },
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

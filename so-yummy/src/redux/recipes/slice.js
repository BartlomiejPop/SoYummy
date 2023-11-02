// import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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
			{ name: "Banana pancakes", picture: bananaPancakes },
			{
				name: "Ham hock colcannon",
				picture: hamHockColcannon,
			},
			{ name: "Polish pancakes", picture: polishPancakes },
			{ name: "Boxty breakfast", picture: boxtyBreakfast },
			{ name: "French omlette", picture: frenchOmlette },
			{ name: "English breakfast", picture: englishBreakfast },
			{ name: "Cheese sandwich", picture: cheeseSandwich },
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
			{ name: "Christmas Pudding Trifle", picture: christmasPuddingTrifle },
			{ name: "Apple frangipan tort", picture: appleFrangipanTort },
			{ name: "New york cheescake", picture: newYorkCheescake },
			{ name: "sugar pie", picture: sugarPie },
		],
		beef: [
			{ name: "Blackberry fool", picture: beefAndMustardPie },
			{ name: "Choc Chip Pecan Pie", picture: braisedBeefChilli },
			{
				name: "Raspbery brownies",
				picture: generalTsosChicken,
			},
			{ name: "Beef lo mein", picture: beefLoMein },
			{ name: "Beef brisket pot roast", picture: beefBrisketPotRoast },
			{ name: "Beef brisket pot", picture: beefBrisketPot },
			{ name: "Beef sunday roast", picture: beefSundayRoast },
			{ name: "Beef dumpling stew", picture: beefDumplingStew },
			{ name: "Beef dumpling", picture: beefDumpling },
			{ name: "Beef wellington", picture: beefWellington },
		],
		seafood: [{ name: "Sushi", picture: sushi }],
		pasta: [{ name: "Squash linguine", picture: squashLinguine }],
	},
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {},
	extraReducers: {},
});

export const recipesReducer = recipesSlice.reducer;

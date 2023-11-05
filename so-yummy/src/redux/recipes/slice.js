// import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
	addRecipe,
	getMyRecipes,
	deleteRecipe,
	addToFavorites,
	getFavorites,
	deleteFromFavorites,
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
			{
				title: "Banana pancakes",
				picture: bananaPancakes,
				about:
					"Fluffy on the inside, crispy on the outside and delicately flavored with bananas, these are phenomenal banana pancakes.",
				time: "20min",
				recipe:
					"In a small bowl, mash the banana with a fork until almost smooth. Whisk in the eggs, then add the milk and vanilla and whisk until well blended. Pour the banana mixture and the melted butter into the flour mixture. Fold the batter gently with a rubber spatula until just blended; do not over-mix. The batter will be thick and lumpy. ",
				ingredients:
					"1½ cups all purpose flour, spooned into measuring cup and leveled off 2 tablespoons sugar 2½ teaspoons baking powder ½ teaspoon salt",
			},
			{
				title: "Ham hock colcannon",
				picture: hamHockColcannon,
			},
			{
				title: "Polish pancakes",
				picture: polishPancakes,
				about:
					"Naleśniki (already plural) are Polish-style thin pancakes, often filled with sweet or savoury fillings. They can be rolled up or folded.",
				time: "15 minutes",
				recipe:
					"Get a large bowl. Add flour, a pinch of salt and vanilla sugar into it, combine with a fork.Gradually pour in milk and water, stirring vigorously with a whisk - to prevent lumps from forming. Add the eggs and mix again. If you have 2 tablespoons of soft butter - add it as well. You can mix with a whisk by hand, or with an electric mixer. If there are some lumps anyway, you can pour the dough through a strainer.",
				ingredients:
					"1¼ cup (150 g) all-purpose flour    Pinch of salt1 tbsp vanilla sugar or fine sugar; only if you're making a sweet filling⅘ cup (200 ml) mil ⅖ (6.5 tbsp, 100 ml) water, can be carbonated 2 eggs 2 tbsp (25 g) butter  ½ tsp neutral cooking oil, e.g. canola",
			},
			{
				title: "Boxty breakfast",
				picture: boxtyBreakfast,
				about:
					"Boxty are potato pancakes. The savory pancakes consist of potatoes, flour, eggs, milk, and seasonings shaped into patties and fried in oil. ",
				time: "30 mins",
				recipe:
					" You'll find the full, step-by-step recipe below – but here's a brief overview of what you can expect when you make Irish boxty: Toss the grated potatoes with flour, then stir in the mashed potatoes. Mix the wet ingredients, stir into the potato mixture, and season.Fry the mixture in patties on both sides until golden brown. ",
				ingredients:
					"· Potatoes: You'll need grated raw potatoes and a cup of leftover mashed potatoes.Flour: All-purpose flour adds structure and helps hold the pancakes together.Egg: An egg lends moisture and acts as a binder.Milk: You'll need a tablespoon of skim milk.Seasonings: This Irish boxty is simply seasoned with salt and pepper.Oil: The savory Irish pancakes are fried in olive oil. ",
			},
			{
				title: "French omlette",
				picture: frenchOmlette,
				about:
					"The French omelette looms large in kitchen legend, and the story you'll most often hear is that it was the dish chefs would use to test prospective cooks. ",
				time: "10 mins",
				recipe:
					"Whisk eggs, water, and salt together in a mixing bowl. Whisk until mixture is very liquid and whites are completely blended in, 1 or 2 minutes. ",
				ingredients:
					"3 large eggs Kosher salt and freshly ground white or black pepper 1 tablespoon (15g) unsalted butter",
			},
			{
				title: "English breakfast",
				picture: englishBreakfast,
				about:
					"The 'common' full English breakfast is a substantial meal consisting of back bacon, eggs, British sausage, baked beans, bubble and squeak, fried tomato, fried mushrooms, black pudding, with fried and toasted bread on the side.",
				time: "35 minutes.",
				recipe:
					"    Warm the beans. ...Cook the sausages and bacon. ...If you're having black pudding, add it to the pan and fry, flipping once. ...Cook the mushrooms and tomatoes. ... Fry the bread and cook the eggs. ...Plate and enjoy!",
				ingredients:
					"bacon, eggs, sausage, black pudding, baked beans, grilled tomato, fried bread and toast, served with a jams, marmalades, tea/coffee and orange juice",
			},
			{
				title: "Cheese sandwich",
				picture: cheeseSandwich,
				about:
					"A cheese sandwich is a sandwich made with cheese on bread. Typically semi-hard cheeses are used for the filling, such as Cheddar, Red Leicester, or Double Gloucester",
				time: " 3 to 4 mins",
				recipe:
					"    Liberally butter one side of each slice of bread.Top one side with cheese. Add crisps if using.Add second slice on top butter-side-down, gently press to secure the filling, then slice in half and enjoy!",
				ingredients: "cheese,bread",
			},
		],
		miscellaneous: [
			{
				title: "Portugese custard tarts",
				picture: portugeseCustardTarts,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Portugese prego por",
				picture: portugesePregoPor,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Stuffed lamb tomatoes",
				picture: stuffedLambTomatoes,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Salmon eggs benedict",
				picture: salmonEggsBenedict,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
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
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Chicken Alfredo Primavera",
				picture: chickenAlfredoPrimavera,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Potato gratin with chicken",
				picture: potatoGratinWithChicken,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Piri-piri chicken and slaw",
				picture: piriPiriChickenAndSlaw,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
		],
		desserts: [
			{
				title: "Blackberry fool",
				picture: blackberryFool,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Choc Chip Pecan Pie",
				picture: chocChipPecanPie,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Raspbery brownies",
				picture: raspberyBrownies,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Christmas Pudding Trifle",
				picture: christmasPuddingTrifle,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Apple frangipan tort",
				picture: appleFrangipanTort,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "New york cheescake",
				picture: newYorkCheescake,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "sugar pie",
				picture: sugarPie,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
		],
		beef: [
			{
				title: "Blackberry fool",
				picture: beefAndMustardPie,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Choc Chip Pecan Pie",
				picture: braisedBeefChilli,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Raspbery brownies",
				picture: generalTsosChicken,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef lo mein",
				picture: beefLoMein,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef brisket pot roast",
				picture: beefBrisketPotRoast,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef brisket pot",
				picture: beefBrisketPot,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef sunday roast",
				picture: beefSundayRoast,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef dumpling stew",
				picture: beefDumplingStew,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef dumpling",
				picture: beefDumpling,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
			{
				title: "Beef wellington",
				picture: beefWellington,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
		],
		seafood: [
			{
				title: "Sushi",
				picture: sushi,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
		],
		pasta: [
			{
				title: "Squash linguine",
				picture: squashLinguine,
				about: "",
				time: "",
				recipe: "",
				ingredients: "",
			},
		],
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
	reducers: {},
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
		[getFavorites.fulfilled](state, action) {
			// const recipes = action.payload;
			// const favoriteRecipes = recipes.filter((el) => el.favorite === true);
			state.favoriteRecipes = action.payload;
		},
		[deleteRecipe.fulfilled](state, action) {
			const recipeId = action.payload.data._id;
			state.myRecipes = state.myRecipes.filter((el) => el._id !== recipeId);
		},

		[addToFavorites.fulfilled](state, action) {
			state.favoriteRecipes.push(action.payload);
		},
		[deleteFromFavorites.fulfilled](state, action) {
			const recipeId = action.payload.id;
			state.favoriteRecipes = state.favoriteRecipes.filter(
				(el) => el.id !== recipeId
			);
		},

		// [addRecipe.rejected]: handleRejected,
	},
});

export const recipesReducer = recipesSlice.reducer;

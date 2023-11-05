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
				about:
					"Creamy, comforting mash with garlic and double cream, chunks of ham hock and shredded Savoy cabbage. Serve a bowlful topped with a runny fried egg",
				time: "40min",
				ingredients:
					"800g floury potatoes (such as Maris Piper or King Edward)50g butte 3 garlic cloves, chopped1 small Savoy cabbage, shredded 8 spring onions, sliced on a diagonal100ml double cream 2 tbsp wholegrain mustard180g ready-cooked ham hock 4 eggs",
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
				about:
					"Pastel de nata, (or, the plural, pasteis de nata) are quintessentially Portuguese custard tarts with a baked cream and egg yolk custard centre, a buttery puff pastry shell and a golden, caramelised top.",
				time: "4 hrs",
				recipe:
					"Combine flour, salt, and cold water in a bowl. Mix with a wooden spoon until dough just comes together and pulls away from the sides of the bowl. Dough should be sticky; adjust with more flour or water to achieve what's shown in the video. ",
				ingredients:
					"1 cup all-purpose flour¼ teaspoon kosher salt ⅓ cup cold water 1 stick high-quality unsalted butter, fully softened, divided",
			},
			{
				title: "Portugese prego por",
				picture: portugesePregoPor,
				about:
					"Prego is a ubiquitous Portuguese sandwich prepared with thin slices of beef that are seasoned with garlic, fried, sautéed alongside onions and wine, then placed inside a bread roll.",
				time: "2h",
				recipe:
					"Rub the garlic over the steaks then put in a sandwich bag and tip in the olive oil, sherry vinegar and parsley stalks. Smoosh everything together, then use a rolling pin to bash the steaks a few times. Leave for 1-2 hours.",
				ingredients:
					"    1 clove garlic, crushed2 small (about 150g each) rump steaks, all fat trimmed2 tbsp olive oil 1 tbsp sherry vinegar a few flat-leaf parsley stalks 2 ciabatta rolls, lightly toasted 2 rocket, handfuls",
			},
			{
				title: "Stuffed lamb tomatoes",
				picture: stuffedLambTomatoes,
				about:
					"These juicy tomatoes improve in flavour if cooked the day before you serve them. You can easily make them veggie too",
				time: "45 mins",
				recipe:
					"Stuff the tomatoes up to the brim, top tomatoes with their lids, drizzle with 2 tbsp more olive oil, sprinkle 3 tbsp water into the tray, then bake for 35 mins. Serve with salad and crusty bread, hot or cold.",
				ingredients:
					"4 beef tomatoes pinch sugar 4 tbsp Greek extra virgin olive oil, plus extra to drizzle 1 Spanish onion, finely chopped",
			},
			{
				title: "Salmon eggs benedict",
				picture: salmonEggsBenedict,
				about:
					"Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ",
				time: "40min",
				recipe:
					"Lightly toast the English muffins either in a toaster or by frying them in a little butter on their cut sides. Place them on the plates you will use to serve them then spread the cream cheese on top. Divide the smoked salmon between them.",
				ingredients:
					"4 large eggs 2 English muffins (cut in half (Gluten-free, if needed. See notes for Whole30 + paleo)) 4 tablespoons cream cheese (omit for Whole30 + paleo) 3 ounces smoked salmon (salmon lox) 2 teaspoons capers Thinly sliced red onion A pinch of black pepper",

				time: "20 min",
				recipe: "xd",
				ingredients: "egg, salmon",
			},
		],
		chicken: [
			{
				title: "Teriyaki chicken casserole",
				picture: teriyakiChickenCasserole,
				about:
					"Teriyaki Chicken Casserole is full of savory chicken, rice and vegetables. The teriyaki sauce gives it outstanding flavor. This delicious meal is one your family will love!",
				time: "1h",
				recipe:
					"Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.",
				ingredients:
					"3/4 cup low-sodium soy sauce1/2 cup water1/4 cup brown sugar1/2 teaspoon ground ginger1/2 teaspoon minced garlic",
			},
			{
				title: "Chicken Alfredo Primavera",
				picture: chickenAlfredoPrimavera,
				about:
					"Chicken primavera Alfredo features sautéed chicken, mushrooms, and green and red peppers in a rich Alfredo sauce.",
				time: "30 mins",
				recipe:
					"Prepare pasta according to package directions, adding in vegetables during the last 3 minutes of cooking.Step 2Meanwhile, in medium saucepan, heat chicken and Alfredo sauce over medium-high heat, stirring occasionally, 5 minutes.Step 3 Serve chicken mixture over hot pasta and vegetables.",
				ingredients:
					"1 pound fettuccine pasta¼ cup butter 2 skinless, boneless chicken breast halves, cut into strips1 clove garlic, minced, or more to taste 4 ounces sliced fresh mushrooms",
			},
			{
				title: "Potato gratin with chicken",
				picture: potatoGratinWithChicken,
				about:
					"You can call it a gratin, a dauphinoise, a casserole, or whatever you’d like, we just know it’s darn delicious. Chicken, thinly sliced potatoes, and onions are blanketed in a creamy sauce that’s absolutely amazing. It’s a little bit addictive; it’s a dish that makes it nearly impossible to stop after the first serving. (But there are worse problems to have.)",
				time: "1 hour 20 minutes",
				recipe:
					"Preheat the oven to 200C/400F.Heat the oil in a large frying pan. Add the onion, garlic and carrots and cook on medium heat, stirring regularly until the onion softens.Add the wine, bring to the boil, then simmer for 2-3 minutes. Add the cream and mustard and stir together. Heat through until almost boiling, then stir in both cheeses, along with a good pinch of salt, pepper and dried thyme",
				ingredients:
					"waxy potatoes, peeled and thinly sliced1 small white onion, thinly sliced3 cups half-and-half2 cups Gruyere or Swiss cheese, grated2 tablespoons unsalted butter, for",
			},
			{
				title: "Piri-piri chicken and slaw",
				picture: piriPiriChickenAndSlaw,
				about:
					"Create your own Portuguese-style chicken, chips and slaw at home. Tip all of the spicy roasting tin juices into a bowl to serve alongside",
				time: "1,5h",
				recipe:
					"Heat the oven to 190C/fan 170C/gas 5. Put the chicken in a roasting tray and cook for 1 hour 20 minutes. Rest under loose foil for 20 minutes. While the chicken is resting, mix together the slaw ingredients and season. Serve the chicken with slaw, fries and condiments",
				ingredients:
					"    1.5kg whole chicken to serve oven chips to serve ketchup, american mustard and mayonnaise",
			},
		],
		desserts: [
			{
				title: "Blackberry fool",
				picture: blackberryFool,
				about:
					"Whipping up this dessert may be the wisest decision you’ll make in the summer: It comes together quickly and uses only five ingredients. Mashed juicy berries folded into lightly whipped cream results in a simple dish that manages to feel both decadent and light. ",
				time: "20min",
				recipe:
					"Halve, the vanilla pod and scrape out the seeds, then place in a large pan along with 350g of the berries, the sugar and lemon juice. Bring to the boil over a medium heat.Simmer for 3 to 4 minutes, or until syrupy and the berries are soft but holding their shape. Set aside to cool.In a large bowl, whisk the cream to form peaks, fold through the yogurt and swirl through a third of the syrup.Layer the rest of the syrup and cream in dessert glasses, garnish with syrup and fresh berries.",
				ingredients:
					"1 vanilla pod500 g blackberries 100 g caster sugar1 lemon  330 ml double cream 200 ml fat-free Greek yoghurt",
			},
			{
				title: "Choc Chip Pecan Pie",
				picture: chocChipPecanPie,
				about:
					"An indulgent chocolate and pecan treat with buttery pastry and a gooey filling everybody can get stuck into",
				time: "2h",
				recipe:
					"First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6.",
				ingredients:
					"    300g plain flour 75g salted butter, cubed 100g cream cheese 1 tbsp icing sugar",
			},
			{
				title: "Raspbery brownies",
				picture: raspberyBrownies,
				about:
					"Squidgy and super moreish, these gorgeous foolproof fruity chocolate bakes will be snapped up in seconds",
				time: "1h",
				recipe:
					"Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.",
				ingredients:
					"200g dark chocolate, broken into chunks100g milk chocolate, broken into chunks 250g pack salted butter 400g soft light brown sugar 4 large eggs 140g plain flour 50g cocoa powder 200g raspberries",
			},
			{
				title: "Christmas Pudding Trifle",
				picture: christmasPuddingTrifle,
				about:
					"Use leftover Christmas pudding to rustle up this speedy and sumptuously creamy trifle with Grand Marnier-steeped oranges",
				time: "15min",
				recipe:
					"Peel the oranges using a sharp knife, ensuring all the pith is removed. Slice as thinly as possible and arrange over a dinner plate. Sprinkle with the demerara sugar followed by the Grand Marnier and set aside.",
				ingredients:
					"3 oranges 1 tbsp demerara sugar 2 tbsp Grand Marnier 300g leftover Christmas pudding 500g pot custard 250g pot mascarpone 284ml pot double cream",
			},
			{
				title: "Apple frangipan tort",
				picture: appleFrangipanTort,
				about:
					"With a base of crushed biscuits, rather than pastry, this tart is quick to make – no need for any rolling out or baking blind. The apple and almond go so well together too. Make it a day ahead then just reheat it when you are ready to serve.",
				time: "50min",
				recipe:
					"Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.",
				ingredients:
					" 175g/6oz digestive biscuits 75g/3oz butter 200g/7oz Bramley applesFor the frangipane filling 75g/3oz butter, softened 75g/3oz caster sugar 2 free-range eggs, beaten 75g/3oz ground almonds 1 tsp almond extract 50g/1¾oz flaked almonds",
			},
			{
				title: "New york cheescake",
				picture: newYorkCheescake,
				about:
					"This authentic creamy dessert will add a taste of New York to any dining table. Our American-style baked cheesecake recipe makes an easy family dessert.",
				time: "2h",
				recipe:
					"Line the base of a 23cm springform cake tin by putting a square piece of parchment paper or foil on top of the tin base and then clipping the side on so the paper or foil is trapped and any excess sticks out of the bottom.",
				ingredients:
					" 85g butter, plus extra for tin 140g digestive biscuits, made into fine crumbs (add 2 extra biscuits if you like a thicker base) 1 tbsp sugar, granulated or golden caster",
			},
			{
				title: "sugar pie",
				picture: sugarPie,
				about:
					"Sugar pie is a dessert in northern French and Belgiancuisine, where it is called tarte au sucre. It is also popular in Canada.",
				time: "1h",
				recipe:
					"Preheat oven to 325°F. Place the pie crust on a cookie sheet (in case it boils over). Blind bake the crust for 10 minutes.When you remove the crust from the oven after 10 minutes, turn the oven up to 350°F. In a large bowl, whisk the melted butter, flour, milk, vanilla, and brown sugar. Whisk the eggs separately, then stir them into the brown sugar mixture.",
				ingredients:
					" 2 tablespoons butter3 tablespoons flour½ cup whole milk1 and ½ cups brown sugar2 large eggs½ teaspoon vanilla extract1 9-inch Pie crust I used a store bought crust",
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
				about:
					"This is a popular Chinese-American dish that appears in suburban Chinese restaurants here in Australia under various other guises. Peking-Style Chicken or sometimes something mysteriously titled House Special Crispy Chicken. I can never resist a House Special! ",
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
				about:
					"Sushi rolls can be filled with any ingredients you choose. Try smoked salmon instead of imitation crabmeat. Serve with teriyaki sauce and wasabi.",
				time: "1 hr 5 mins",
				recipe:
					"Center 1 nori sheet on a bamboo sushi mat. Use wet hands to spread a thin layer of rice on top. Arrange 1/4 of the crabmeat, avocado, cucumber, and pickled ginger over rice in a line down the center. Lift one end of the mat and roll it tightly over filling to make a complete roll. Repeat with remaining ingredients. ",
				ingredients:
					"1 ⅓ cups water ⅔ cup uncooked short-grain white rice3 tablespoons rice vinegar3 tablespoons white sugar1 ½ teaspoons salt4 sheets nori seaweed sheets½ pound imitation crabmeat, flaked1 avocado - peeled, pitted, and sliced½ cucumber, peeled, cut into small strips2 tablespoons pickled ginger",
			},
		],
		pasta: [
			{
				title: "Squash linguine",
				picture: squashLinguine,
				about:
					"Pasta is a type of food typically made from an unleavened dough of wheat  flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
				time: "1h",
				recipe:
					"Cook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.",
				ingredients:
					"350g chopped butternut squash3 peeled garlic cloves3 tbsp olive oil350g linguinesmall bunch sage",
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

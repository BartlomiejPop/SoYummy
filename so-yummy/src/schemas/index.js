import Recipe from "./recipes.js";

const createRecipe = ({
	img,
	title,
	about,
	category,
	time,
	ingredients,
	recipe,
}) => {
	return Recipe.create({
		img,
		title,
		about,
		category,
		time,
		ingredients,
		recipe,
	});
};

const getMyRecipes = async () => {
	return Recipe.find();
};

const removeRecipe = (id) => {
	return Recipe.findByIdAndRemove({ _id: id });
};

const addToFavorites = ({
	img,
	title,
	about,
	category,
	time,
	ingredients,
	recipe,
	favorite,
}) => {
	return Recipe.create({
		img,
		title,
		about,
		category,
		time,
		ingredients,
		recipe,
		favorite,
	});
};

const getFavorites = async () => {
	return Recipe.find((el) => el.favorite === true);
};

// const getRecipe = (title) => {
// 	return Recipe.find((el) => el.title === title);
// };

export default {
	createRecipe,
	getMyRecipes,
	removeRecipe,
	addToFavorites,
	getFavorites,
};

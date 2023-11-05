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
	return Recipe.find({ favorite: true });
};

const deleteFromFavorites = async (id) => {
	return Recipe.findOneAndUpdate({ _id: id }, { favorite: false });
};

export default {
	createRecipe,
	getMyRecipes,
	removeRecipe,
	addToFavorites,
	getFavorites,
	deleteFromFavorites,
};

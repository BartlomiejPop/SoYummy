import Recipe from "./recipes.js";

const createRecipe = ({
	user,
	img,
	title,
	about,
	category,
	time,
	ingredients,
	recipe,
}) => {
	return Recipe.create({
		user,
		img,
		title,
		about,
		category,
		time,
		ingredients,
		recipe,
	});
};

const getMyRecipes = async (userId) => {
	return Recipe.find({ user: userId, favorite: false });
};

const removeRecipe = (id) => {
	return Recipe.findByIdAndRemove({ _id: id });
};

const addToFavorites = ({
	user,
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
		user,
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

const getFavorites = async (userId) => {
	return Recipe.find({ favorite: true, user: userId });
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

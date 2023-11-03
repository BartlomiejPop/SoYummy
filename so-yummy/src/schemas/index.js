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

export default { createRecipe, getMyRecipes, removeRecipe };

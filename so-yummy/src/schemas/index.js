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

export default { createRecipe, getMyRecipes };

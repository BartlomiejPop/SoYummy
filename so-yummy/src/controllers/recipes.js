import Recipe from "../schemas/recipes.js";
import recipes from "../schemas/index.js";
// import service from '../schemas/index.js'

export const create = async (req, res, next) => {
	const { img, title, about, category, time, ingredients, recipe } = req.body;
	try {
		const result = await recipes.createRecipe({
			img,
			title,
			about,
			category,
			time,
			ingredients,
			recipe,
		});

		res.status(201).json({
			status: "success",
			code: 201,
			data: { recipe: result },
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export const get = async (req, res, next) => {
	try {
		const results = await recipes.getMyRecipes();
		res.json({
			status: "success",
			code: 200,
			data: {
				contacts: results,
			},
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export default { create, get };

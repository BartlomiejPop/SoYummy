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
			data: result,
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export const get = async (req, res, next) => {
	try {
		const myRecipes = await recipes.getMyRecipes();
		res.json({
			status: "success",
			code: 200,
			data: myRecipes,
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export const remove = async (req, res, next) => {
	const { id } = req.params;

	try {
		const result = await recipes.removeRecipe(id);
		if (result) {
			res.json({
				status: "success",
				code: 200,
				data: result,
			});
		} else {
			res.status(404).json({
				status: "error",
				code: 404,
				message: `Not found recipe id: ${id}`,
				data: "Not Found",
			});
		}
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export default { create, get, remove };

import Recipe from "../schemas/recipes.js";
import recipes from "../schemas/index.js";
// import service from '../schemas/index.js'

export const create = async (req, res, next) => {
	const { img, title, about, category, time, ingredients, recipe } = req.body;
	try {
		console.error(req.user);
		const user = req.user._id;
		const result = await recipes.createRecipe({
			user,
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
		const userId = req.user._id;
		const myRecipes = await recipes.getMyRecipes(userId);
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

export const addToFavorites = async (req, res, next) => {
	console.error(req.body);
	const { img, title, about, category, time, ingredients, recipe } = req.body;
	const favorite = true;
	try {
		const user = req.user._id;
		const result = await recipes.addToFavorites({
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

export const getFavorites = async (req, res, next) => {
	try {
		const userId = req.user._id;
		const favoriteRecipes = await recipes.getFavorites(userId);
		res.json({
			status: "success",
			code: 200,
			data: favoriteRecipes,
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export const deleteFromFavorites = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedFromFavoritedRecipe = await recipes.deleteFromFavorites(id);
		res.json({
			status: "success",
			code: 200,
			data: deletedFromFavoritedRecipe,
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};

export default {
	create,
	get,
	remove,
	addToFavorites,
	getFavorites,
	deleteFromFavorites,
};

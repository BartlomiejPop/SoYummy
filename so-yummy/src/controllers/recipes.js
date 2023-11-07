import recipes from "../schemas/index.js";
import path from "path";
import fs from "fs";

export const create = async (req, res, next) => {
	const { img, title, about, category, time, ingredients, recipe } = req.body;
	try {
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
	const { img, title, about, category, time, ingredients, recipe } = req.body;
	const favorite = true;
	try {
		const user = req.user;
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

export const addImage = (req, res, next) => {
	// console.error(req);
	try {
		// const { file } = req;

		// if (!file) {
		// 	return res.status(400).json({
		// 		status: "Bad Request",
		// 		message: "Avatar file is required.",
		// 	});
		// }
		// const tmpDir = path.join(__dirname, "..", "tmp");
		// const avatarsDir = path.join(__dirname, "..", "public", "avatars");
		// const uniqueFileName = `${Date.now()}-${file.originalname}`;
		// // const tmpFilePath = path.join(tmpDir, uniqueFileName);
		// const avatarFilePath = path.join(avatarsDir, uniqueFileName);
		// const tmpFilePath = path.join(tmpDir, uniqueFileName);
		res.status(200).json({
			status: "success",
			data: {
				message: "Avatar updated successfully.",
				avatarURL: `/src/uploads/${uniqueFileName}`,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: "Internal Server Error",
			message: "Avatar update failed.",
			error: error.message,
		});
	}
};

export default {
	create,
	get,
	remove,
	addToFavorites,
	getFavorites,
	deleteFromFavorites,
	addImage,
};

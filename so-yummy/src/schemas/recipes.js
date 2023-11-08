import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
	},
	img: { type: String },
	title: {
		type: String,
		required: [true, "Set title for recipe"],
	},
	about: {
		type: String,
		required: [true, "Set about for recipe"],
	},
	category: {
		type: String,
	},
	time: { type: String },
	ingredients: { type: String },
	recipe: { type: String },
	favorite: {
		type: Boolean,
		default: false,
	},
});

const Recipe = mongoose.model("recipe", recipeSchema);
export default Recipe;

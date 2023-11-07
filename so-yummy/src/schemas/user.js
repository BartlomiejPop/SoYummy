import mongoose from "mongoose";
import bCrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
	},
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	token: {
		type: String,
		default: null,
	},
});

userSchema.methods.setPassword = function (password) {
	this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function (password) {
	return bCrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;

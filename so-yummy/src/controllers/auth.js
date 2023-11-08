import User from "../schemas/user.js";
import jwt from "jsonwebtoken";
import passport from "../config/config-passport.js";

const secret = process.env.SECRET;

const auth = (req, res, next) => {
	passport.authenticate("jwt", (err, user) => {
		if (!user || err) {
			return res.status(401).json({
				status: "error",
				code: 401,
				message: "Not authorized",
				data: "Unauthorized",
			});
		}
		req.user = user;
		next();
	})(req, res, next);
};

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user || !user.validPassword(password)) {
		return res.status(401).json({
			status: "error",
			code: 401,
			message: "Incorrect login or password",
			data: "Bad request",
		});
	}
	try {
		const name = user.name;
		const payload = {
			id: user.id,
			name: name,
		};

		const token = jwt.sign(payload, secret, { expiresIn: "1h" });
		user.token = token;
		await user.save();

		return res.status(200).json({
			status: "success",
			code: 200,
			data: {
				token: token,
				user: {
					name: name,
					email: email,
				},
			},
		});
	} catch (err) {
		return res.status(400).json({
			status: "Bad request",
			code: 400,
			message: `Login failed ${err}`,
		});
	}
};

const register = async (req, res, next) => {
	const { email, password, name } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		return res.status(409).json({
			status: "error",
			code: 409,
			message: "Email in use",
			data: "Conflict",
		});
	}
	try {
		const newUser = new User({
			name,
			email,
		});
		newUser.setPassword(password);
		await newUser.save();
		return res.status(201).json({
			status: "success",
			code: 201,
			data: {
				message: "Registration successful. Check your email to verify",
			},
		});
	} catch (error) {
		res.status(400).json({
			status: "Bad Request",
			code: 400,
			data: {
				message: "Registration failed",
			},
		});
		next(error);
	}
};

const logout = async (req, res) => {
	const { _id } = req.user;
	const user = await User.findById(_id);
	if (user.token) {
		user.token = "";
		await user.save();
		return res.status(200).json({
			code: 204,
			status: "Logged out",
		});
	}
	return res.status(400).json({
		code: 400,
		Status: "Bad request",
		ContentType: "application / json",
		ResponseBody: {
			message: "Bad request",
		},
	});
};

export default { login, register, logout, auth };

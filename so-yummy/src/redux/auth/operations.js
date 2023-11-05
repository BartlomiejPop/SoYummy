// import { registerUser } from "./slice.js";
// import { setUsername } from "./slice.js";
// const { registerUser } = require("./slice.mjs");
// import dotenv from "dotenv";
import { Navigate } from "react-router";
// import dotenv from "dotenv";
// dotenv.config();

// import dotenv from "dotenv";
// dotenv.config();

// const port = process.env.PORT || 3000;

const BASE_URL = `http://localhost:3000`;

export const register = (userData) => async () => {
	try {
		const response = await fetch(`${BASE_URL}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		// if (response.ok) {
		// 	const data = await response.json();
		// 	const { user } = data;
		// 	dispatch(registerUser(user));
		// 	return true;
		// } else {
		// 	return false;
		// }
	} catch (error) {
		return false;
	}
};

export const login = (userData) => async (dispatch) => {
	try {
		await fetch(`http://localhost:3000/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
	} catch (error) {}
};

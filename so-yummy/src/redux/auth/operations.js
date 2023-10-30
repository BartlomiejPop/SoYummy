// import { registerUser } from "./slice.js";
// import { setUsername } from "./slice.js";
// const { registerUser } = require("./slice.mjs");

import { Navigate } from "react-router";

const BASE_URL = "http://localhost:3000";

export const register = (userData) => async () => {
	try {
		await fetch(`${BASE_URL}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		// if (response.ok) {
		// 	return true;
		// } else {
		// 	return false;
		// }
	} catch (error) {
		// console.error("Signup error:", error);
		return false;
	}
};

export const login = (userData) => async (dispatch) => {
	try {
		// dispatch(setUsername(userData));

		await fetch(`${BASE_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		// return response;
	} catch (error) {
		// console.error("Login error:", error);
		// return false;
	}
};

import { httpAuth } from "../../config/services.js";

export const authApi = {
	loginUser: async (userData) => {
		const { data } = await httpAuth.post(`/login`, {
			email: userData.email,
			password: userData.password,
		});
		return data;
	},
};

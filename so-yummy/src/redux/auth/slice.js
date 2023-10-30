import pkg from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations.js";

// const { createSlice } = pkg;

// const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	// isRefreshing: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		// setUsername: (state, action) => {
		// 	state.username = action.payload;
		// },
	},
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.error = null;
		},
		[register.rejected](state, action) {
			state.error = action.payload;
		},
		[login.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.error = null;
		},
		// [logOut.fulfilled](state) {
		// 	state.user = { name: null, email: null };
		// 	state.token = null;
		// 	state.isLoggedIn = false;
		// },
		// [refreshUser.pending](state) {
		// 	state.isRefreshing = true;
		// },
		// [refreshUser.fulfilled](state, action) {
		// 	state.user = action.payload;
		// 	state.isLoggedIn = true;
		// 	state.isRefreshing = false;
		// 	state.error = null;
		// },
		// [refreshUser.rejected](state) {
		// 	state.isRefreshing = false;
		// },
	},
});

// export const { registerUser, setUsername } = authSlice.actions;
export const { loginUser } = authSlice.actions;
export default { loginUser };
export const authReducer = authSlice.reducer;
// export default userSlice.reducers;

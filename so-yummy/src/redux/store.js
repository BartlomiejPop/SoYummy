import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session.js";
import { authReducer } from "./auth/slice.js";
import { recipesReducer } from "./recipes/slice.js";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		recipes: recipesReducer,
	},
});

export default store;

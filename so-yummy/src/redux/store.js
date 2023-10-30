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

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export default store;

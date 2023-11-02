import { Route, Routes } from "react-router-dom";
import React, { lazy, useEffect } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { refreshUser } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CategoriesPage = lazy(() => import("../pages/Categories.js"));
const AddRecipesPage = lazy(() => import("../pages/AddRecipesPage.js"));

export const App = () => {
	const { isRefreshing } = useAuth();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(refreshUser());
	// }, [dispatch]);

	return isRefreshing ? (
		<b>Refreshing user...</b>
	) : (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<WelcomePage />} />

				<Route path="/register" element={<RegisterPage />} />
				<Route
					path="/login"
					element={
						<RestrictedRoute redirectTo="/home" component={<LoginPage />} />
					}
				/>
				<Route
					path="/home"
					element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
				/>
				<Route
					path="/categories"
					element={
						<PrivateRoute redirectTo="/" component={<CategoriesPage />} />
					}
				/>
				<Route
					path="/addRecipes"
					element={
						<PrivateRoute redirectTo="/" component={<AddRecipesPage />} />
					}
				/>
			</Route>
		</Routes>
	);
};

export default App;

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
// const RecipesPage = lazy(() => import("../pages/Recipes"));

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

				<Route
					path="/register"
					element={<RegisterPage />}
					// element={
					// 	<RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
					// }
				/>
				<Route
					path="/login"
					// element={<LoginPage />}
					element={
						<RestrictedRoute redirectTo="/home" component={<LoginPage />} />
					}
				/>
				<Route
					path="/home"
					element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
				/>
			</Route>
		</Routes>
	);
};

export default App;

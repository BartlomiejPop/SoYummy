import { Route, Routes } from "react-router-dom";
import React, { lazy, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

// const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
// const RecipesPage = lazy(() => import("../pages/Recipes"));

export const App = () => {
	const { isRefreshing } = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<b>Refreshing user...</b>
	) : (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <Route index element={<HomePage />} /> */}
				<Route
					path="/register"
					element={
						<RestrictedRoute
							redirectTo="/recipes"
							component={<RegisterPage />}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<RestrictedRoute redirectTo="/recipes" component={<LoginPage />} />
					}
				/>
				{/* <Route
					path="/recipes"
					element={
						<PrivateRoute redirectTo="/login" component={<RecipesPage />} />
					}
				/> */}
			</Route>
		</Routes>
	);
};

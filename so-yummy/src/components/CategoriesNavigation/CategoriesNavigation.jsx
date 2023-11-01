import "./CategoriesNavigation.css";
import { useSearchParams } from "react-router-dom";

export const CategoriesNavigation = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="categoriesNavigation">
			<ul className="categoriesNavigationlist">
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "breakfast" })}>
					Breakfast
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "miscellaneous" })}>
					Miscellaneous
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "chicken" })}>
					Chicken
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "desserts" })}>
					Desserts
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "pasta" })}>
					Pasta
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "seafood" })}>
					Seafood
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "salad" })}>
					Salad
				</li>
			</ul>
		</div>
	);
};

export default CategoriesNavigation;

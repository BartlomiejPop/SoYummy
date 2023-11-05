import "./Recipe.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import clockIcon from "../../icons/clock.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/recipes/operations";
import { useState } from "react";
import { addToFavorites } from "../../redux/recipes/operations";

export const Recipe = () => {
	const { title } = useParams();
	const dispatch = useDispatch();
	const [recipeEl, setRecipeEl] = useState(null);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const recipeData = await dispatch(getRecipe(title));
				setRecipeEl(recipeData);
			} catch (error) {
				console.error(error);
			}
		};
		fetchRecipe();
	}, [dispatch, title]);

	if (!recipeEl) {
		// Zwróć null lub inny komponent ładowania, gdy przepis nie został jeszcze pobrany
		return null;
	}

	const handleAddToFavorites = (recipe) => {
		dispatch(addToFavorites(recipe));
	};

	return (
		<div className="recipe">
			<h1 className="recipeTitle">{recipeEl.title}</h1>
			<div className="recipeContentBox">
				<div className="recipeBox">
					<span className="recipeBoxName">About</span>
					<p className="recipeAbout">{recipeEl.about}</p>
				</div>
				<div className="recipeBox">
					<span className="recipeBoxName">Ingredients</span>
					<p className="recipeIngredients">{recipeEl.ingredients}</p>
				</div>
				<div className="recipeBox">
					<span className="recipeBoxName">Recipe</span>
					<p className="recipeRecipe">{recipeEl.recipe}</p>
				</div>
			</div>
			<button
				className="recipeFavButton"
				onClick={() => {
					handleAddToFavorites(recipeEl);
				}}>
				Add to favorites
			</button>
			<div className="recipeTimeBox">
				<img src={clockIcon} />
				<span className="recipeTime">{recipeEl.time}</span>
			</div>
		</div>
	);
};

export default Recipe;

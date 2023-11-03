import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectMyRecipes } from "../../redux/recipes/selectors";
// import getMyRecipes from "../../schemas/index.js";
import { useDispatch } from "react-redux";
import { getMyRecipes } from "../../redux/recipes/operations.js";
import "./MyRecipes.css";

export const MyRecipes = () => {
	const dispatch = useDispatch();
	const recipes = useSelector(selectMyRecipes);
	const myRecipes = dispatch(getMyRecipes());

	return (
		<div>
			<h1 className="myRecipesTitle">My recipes</h1>
			<ul className="myRecipesList">
				{recipes.map((el, index) => (
					<li className="myRecipesItem" key={index}>
						{/* <img src={el.picture} alt={`Recipe ${index + 1}`} /> */}
						<span>{el.data.recipe.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MyRecipes;

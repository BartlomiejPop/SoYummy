import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectFavorites } from "../../redux/recipes/selectors";
// import getMyRecipes from "../../schemas/index.js";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/recipes/operations.js";
import { getFavorites } from "../../redux/recipes/operations.js";
import "./FavoriteRecipes.css";
import photo from "../../images/appleFrangipanTort.png";
import trashIcon from "../../icons/trash.svg";
import { deleteRecipe } from "../../redux/recipes/operations.js";
import { deleteFromFavorites } from "../../redux/recipes/operations.js";
import { getMyRecipes } from "../../redux/recipes/operations.js";
import img from "../../images/ownRecipeImg.jpg";

export const MyRecipes = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const recipes = useSelector(selectFavorites);
	// dispatch(getMyRecipes);
	useEffect(() => {
		dispatch(getFavorites());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteFromFavorites(id));
		dispatch(getMyRecipes());
	};

	return (
		<div>
			<h1 className="myRecipesTitle">Favorites</h1>
			<ul className="myRecipesList">
				{recipes.map((el, index) => (
					<li className="myRecipesItem" key={index}>
						<img
							className="myRecipesImage"
							src={img}
							alt={`Recipe ${index + 1}`}
						/>
						<div className="myRecipesContent">
							<span className="myRecipesItemTitle">{el.title}</span>
							<p>{el.about}</p>
							<span>{el.time}</span>
						</div>
						<div className="myRecipesButtonBox">
							<button
								className="myRecipesButton"
								onClick={() => {
									handleDelete(el._id);
								}}>
								<img src={trashIcon} />
							</button>
							<button
								className="myRecipesButton"
								onClick={() => {
									navigate(`/recipe/${el.title}`);
								}}>
								See recipe
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MyRecipes;

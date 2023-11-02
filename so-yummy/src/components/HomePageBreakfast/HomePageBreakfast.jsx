import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectBreakfast } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";

export const HomePageBreakfast = () => {
	const recipes = useSelector(selectBreakfast);
	const navigate = useNavigate();

	return (
		<div className="HomePageRecipes">
			<h2 className="HomePageRecipesTitle">Breakfast</h2>
			<ul className="HomeRecipesList">
				{recipes.slice(0, 4).map((el, index) => (
					<li className="HomeRecipesListItem" key={index}>
						<img src={el.picture} alt={`Recipe ${index + 1}`} />
					</li>
				))}
			</ul>
			<button
				className="HomePageRecipesButton"
				onClick={() => {
					navigate("/categories?recipes=breakfast");
				}}>
				See more
				<img src={arrowRight} />
			</button>
		</div>
	);
};

export default HomePageBreakfast;

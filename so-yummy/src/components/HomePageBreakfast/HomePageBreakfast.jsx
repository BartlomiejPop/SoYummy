import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectBreakfast } from "../../redux/recipes/selectors.js";

export const HomePageBreakfast = () => {
	const recipes = useSelector(selectBreakfast);

	return (
		<div className="HomePageRecipes">
			<h2 className="HomePageRecipesTitle">Breakfast</h2>
			<ul className="HomeRecipesList">
				{recipes.map((el, index) => (
					<li className="HomeRecipesListItem" key={index}>
						<img src={el.picture} />
					</li>
				))}
			</ul>
			<button className="HomePageRecipesButton">
				See more
				<img src={arrowRight} />
			</button>
		</div>
	);
};

export default HomePageBreakfast;
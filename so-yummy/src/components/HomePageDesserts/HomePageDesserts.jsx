import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectDesserts } from "../../redux/recipes/selectors.js";

export const HomePageDesserts = () => {
	const recipes = useSelector(selectDesserts);

	return (
		<div className="HomePageRecipes">
			<h2 className="HomePageRecipesTitle">Desserts</h2>
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

export default HomePageDesserts;

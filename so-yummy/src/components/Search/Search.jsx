import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectMiscellaneous } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";

export const Search = () => {
	const recipes = useSelector(selectMiscellaneous);
	const navigate = useNavigate();

	return (
		<div className="HomePageRecipes">
			<button
				className="HomePageRecipesButton"
				onClick={() => {
					navigate("/categories?recipes=miscellaneous");
				}}>
				See more
				<img />
			</button>
		</div>
	);
};

export default Search;

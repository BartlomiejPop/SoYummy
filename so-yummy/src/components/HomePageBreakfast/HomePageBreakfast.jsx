import "./HomePageBreakfast.css";
import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors.js";
import { selectBreakfast } from "../../redux/recipes/selectors.js";

export const HomePageBreakfast = () => {
	const recipes = useSelector(selectBreakfast);

	return (
		<ul>
			{recipes.map((el) => (
				<li key={el.id}>
					<img src={el.picture} />
				</li>
			))}
		</ul>
	);
};

export default HomePageBreakfast;

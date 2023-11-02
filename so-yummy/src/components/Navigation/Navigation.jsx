import "./Navigation.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const navigate = useNavigate();
	const tab = useParams();

	return (
		<ul className="navigationList">
			<li
				key="navigationItem1"
				className="navigationItem"
				onClick={() => {
					navigate("/categories");
				}}>
				<NavLink to="/categories">Categories</NavLink>
			</li>

			<li
				key="navigationItem2"
				className="navigationItem"
				onClick={() => {
					navigate("/addRecipes");
				}}>
				<NavLink to="/addRecipes">Add recipes</NavLink>
			</li>
			<li key="navigationItem3" className="navigationItem">
				<NavLink to="/myRecipes">My recipes</NavLink>
			</li>
			<li key="navigationItem4" className="navigationItem">
				<NavLink to="/favorites">Favorites</NavLink>
			</li>
			<li key="navigationItem5" className="navigationItem">
				<NavLink to="/shoppingList">Shopping list</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;

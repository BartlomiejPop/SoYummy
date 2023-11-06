import "./Navigation.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import searchIcon from "../../icons/search.svg";

export const Navigation = () => {
	const navigate = useNavigate();

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
			{/* <li key="navigationItem5" className="navigationItem">
				<NavLink to="/search/recipe">
					<img src={searchIcon} />
				</NavLink>
			</li> */}
		</ul>
	);
};

export default Navigation;

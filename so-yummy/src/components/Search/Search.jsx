import arrowRight from "../../icons/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectMiscellaneous } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";
import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchRecipe } from "../../redux/recipes/slice.js";

export const Search = () => {
	const [value, setValue] = useState(name);
	const [searchParams, setSearchParams] = useSearchParams();
	const name = searchParams.get("name");
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(searchRecipe(name));
	// }, [dispatch]);

	const handleInputChange = (e) => {
		const { value } = e.target;
		setSearchParams({ name: value });
		setValue(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(searchRecipe(name));
	};

	return (
		<div className="search">
			<form onSubmit={handleSubmit} className="searchField">
				<input
					required=""
					value={value}
					onChange={handleInputChange}
					name="search"
					placeholder="Search by name"
					className="searchFieldInput"
				/>
				<button className="searchFieldButton">Search</button>
			</form>
		</div>
	);
};

export default Search;

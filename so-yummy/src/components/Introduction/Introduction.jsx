import "./Introduction.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Introduction = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [value, setValue] = useState({
		searchValue: "",
	});

	const handleSearch = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const searchValue = form.elements.search.value;
		// const response = await dispatch(
		// 	login({
		// 		password,
		// 		email,
		// 	})
		// );
		// const shouldRedirect = response.payload.status === "success";
		// if (shouldRedirect) {
		// 	navigate("/home");
		// 	Notiflix.Notify.success("Logged in");
		// }
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		console.error(value);
		setValue({
			searchValue: value,
		});
	};

	return (
		<div className="introduction">
			<h1 className="title">
				<span className="titleGreen">So</span>Yummy
			</h1>
			<form onSubmit={handleSearch}>
				<p className="description">
					"What to cook?" is not only a recipe app, it is, in fact, your
					cookbook. You can add your own recipes to save them for the future.
				</p>
				<div className="searchField">
					<input
						required=""
						value={value.searchValue}
						onChange={handleInputChange}
						name="search"
						placeholder="Search by name"
						className="searchFieldInput"
					/>
					<button className="searchFieldButton">Search</button>
				</div>
			</form>
		</div>
	);
};

export default Introduction;

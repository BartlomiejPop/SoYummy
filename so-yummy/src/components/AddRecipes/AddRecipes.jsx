import "./AddRecipes.css";
import picturePlaceholder from "../../icons/picturePlaceholder.svg";
import React, { useState } from "react";

export default function AddRecipes() {
	window.scrollTo(0, 0);

	const [formData, setFormData] = useState({
		title: "",
		about: "",
		category: "",
		time: "",
		ingredients: "",
		recipe: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const title = form.elements.title.value;
		const about = form.elements.about.value;
		const category = form.elements.category.value;
		const time = form.elements.time.value;
		const ingredients = form.elements.ingredients.value;
		const recipe = form.elements.recipe.value;
		console.error(title, about, recipe, time, category);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="addRecipes">
			<h1 className="addRecipesTitle"> ADD RECIPE</h1>
			<div className="addRecipesWrapper">
				<div className="addRecipesDescription">
					<div className="addRecipesImage">
						<img src={picturePlaceholder} className="addRecipesIcon" />
					</div>
					<form className="addRecipesForm" onSubmit={handleSubmit}>
						<div className="addRecipesInputBox">
							<input
								required
								name="title"
								className="formItem"
								placeholder="Entern recipe title"
								value={formData.name}
								onChange={handleInputChange}
							/>
							<input
								required
								name="about"
								className="formItem"
								placeholder="Enter about recipe"
								value={formData.about}
								onChange={handleInputChange}
							/>
							<input
								required
								name="category"
								className="formItem"
								placeholder="Enter category"
								value={formData.category}
								onChange={handleInputChange}
							/>
							<input
								name="time"
								className="formItem"
								placeholder="Preparation time"
								value={formData.time}
								onChange={handleInputChange}
							/>
						</div>
						<div className="addRecipesTextareaBox">
							<div className="addRecipesTextareaWrapper">
								<textarea
									name="ingredients"
									placeholder="Enter ingredients"
									className="addRecipesTextarea"
									value={formData.ingredients}
									onChange={handleInputChange}></textarea>
								<textarea
									name="recipe"
									placeholder="Enter recipe"
									className="addRecipesTextarea"
									value={formData.recipe}
									onChange={handleInputChange}></textarea>
							</div>
							<div className="addRecipesButtonBox">
								<button className="addRecipesButton">Add</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

import "./Introduction.css";

export const Introduction = () => {
	return (
		<div className="introduction">
			<h1 className="title">
				<span className="titleGreen">So</span>Yummy
			</h1>
			<p className="description">
				"What to cook?" is not only a recipe app, it is, in fact, your cookbook.
				You can add your own recipes to save them for the future.
			</p>
			<div className="searchField">
				<input placeholder="Chicken" className="searchFieldInput" />
				<button className="searchFieldButton">Search</button>
			</div>
		</div>
	);
};

export default Introduction;

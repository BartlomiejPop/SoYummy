import "./Navigation.css";

export const Navigation = () => {
	return (
		<ul className="navigationList">
			<li key="navigationItem1" className="navigationItem">
				Categories
			</li>
			<li key="navigationItem2" className="navigationItem">
				Add recipes
			</li>
			<li key="navigationItem3" className="navigationItem">
				My recipes
			</li>
			<li key="navigationItem4" className="navigationItem">
				Favorites
			</li>
			<li key="navigationItem5" className="navigationItem">
				Shopping list
			</li>
		</ul>
	);
};

export default Navigation;

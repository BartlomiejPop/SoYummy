import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<header>
			{/* <Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />} */}
		</header>
	);
};

import Header from "../components/Header/Header.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import HomePageBreakfast from "../components/HomePageBreakfast/HomePageBreakfast.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./HomePage.css";
import greenBg from "../images/greenBg.png";
import leaves from "../images/leaves.png";
import leaves2 from "../images/leaves2.png";
import salad from "../images/salad.png";

export default function Home() {
	return (
		<div>
			<div className="overlay"></div>
			<img src={salad} className="salad" />
			<img src={leaves} className="leaves" />
			<img src={leaves2} className="leaves2" />
			<img src={greenBg} className="greenBg" />
			<Header />
			<Introduction />
			<HomePageBreakfast />
			<Footer />
		</div>
	);
}

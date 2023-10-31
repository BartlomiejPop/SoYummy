import emailIcon from "../../icons/email.svg";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../../icons/cultery.svg";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footerBoxesWrapper">
				<div className="footerDescriptionBox">
					<div className="footerLogoField">
						<img src={logo} />
						<p className="footerTitle">So Yummy</p>
					</div>
					<ul className="footerDescriptionList">
						<li key="footerList1">
							Database of recipes that can be replenished{" "}
						</li>
						<li key="footerList2">
							Flexible search for desired and unwanted ingredients
						</li>
						<li key="footerList3">
							Ability to add your own recipes with photos
						</li>
						<li key="footerList4">Convenient and easy to use</li>
					</ul>
				</div>
				<div className="footerNewsletterBox">
					<span className="newsletterText">Subscribe to the Newsletter</span>
					<p>
						Subscribe up to the newsletter. Be in touch with latest news and
						special offers, etc.
					</p>
					<div className="footerInputBox">
						<img className="emailIcon" src={emailIcon} />
						<input
							className="footerInput"
							placeholder="Enter your email address"
						/>
					</div>
					<button className="footerButton">Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;

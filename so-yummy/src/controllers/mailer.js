import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.USER,
		pass: process.env.PASSWORD,
	},
});

const sendEmail = (to) => {
	const subject = "Thanks";
	const text = "xd";
	const mailOptions = {
		from: process.env.USER,
		to,
		subject,
		text,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Błąd podczas wysyłania e-maila:", error);
		} else {
			console.log("E-mail został wysłany:", info.response);
		}
	});
};
export default { sendEmail };

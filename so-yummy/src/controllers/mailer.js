import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Notiflix from "notiflix";
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
		subject: subject,
		text: text,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Notiflix.Notify.failure("Błąd podczas wysyłania e-maila:", error);
		} else {
			Notiflix.Notify.success("E-mail został wysłany:", info.response);
		}
	});
};
export default { sendEmail };

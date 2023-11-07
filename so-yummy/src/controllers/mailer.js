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

export const sendEmail = async (req, res) => {
	const email = req.body.email;
	const subject = "Thanks for testing my application";
	const text =
		"Thank you for testing my application. No more messages will be sent on this email :)";
	const mailOptions = {
		from: process.env.USER,
		to: email,
		subject: subject,
		text: text,
	};
	try {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error("Błąd podczas wysyłania e-maila:", error);
			} else {
				console.log("E-mail został wysłany:", info.response);
			}
		});
		res.status(200).json({
			status: "success",
			code: 201,
			data: res.body,
		});
	} catch (e) {
		console.log(e);
	}
};

export default { sendEmail };

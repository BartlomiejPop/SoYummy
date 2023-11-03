// const passport = require("passport");
import passport from "passport";
// const passportJWT = require("passport-jwt");
import passportJWT from "passport-jwt";
// const User = require("../schemas/user");
import User from "../schemas/user.js";
const secret = "secret";

const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
	secretOrKey: secret,
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

passport.use(
	new Strategy(params, function (payload, done) {
		User.find({ _id: payload.id })
			.then(([user]) => {
				if (!user) {
					return done(new Error("User not found"));
				}
				return done(null, user);
			})
			.catch((err) => done(err));
	})
);

export default passport;

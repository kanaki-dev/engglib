import GoogleStrategy from "passport-google-oauth2";
import passport from "passport";
import { conf } from "../utlis/conf.js";
import services from "../appwrite/store.js";
import { ApiError } from "../utlis/ApiError.js";

const GS = GoogleStrategy.Strategy;
passport.use(
    new GS(
        {
            clientID: conf.GOOGLE_CLIENT_ID,
            clientSecret: conf.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
            passReqToCallback: true,
        },
        async function (request, accessToken, refreshToken, profile, done) {
            let user = await services.retrievedUser(profile._json.email);
            user = user["documents"][0];

            if (!user) {
                user = await services.registerUser({
                    username: profile._json.name,
                    firstName: profile._json.given_name,
                    lastName: profile._json.family_name,
                    image: profile._json.picture,
                    email: profile._json.email,
                });
            }

            return done(null, user);
        }
    )
);

passport.serializeUser(function (user, done) {
    return done(null, user);
});

passport.deserializeUser(function (user, done) {
    return done(null, user);
});

const isLoggedIn = (req, res, next) => {
    const regex = new RegExp("^/cse/1st_sem$");

    if (regex.test(req.originalUrl)) {
        return next();
    }
    req?.user ? next() : res.status(401).render("loginFailed");
};

const isAdmin = (req, res, next) => {
    if (req?.user.role == "admin") {
        return next();
    }
    return next(new ApiError(500, "unauthorized entry"));
};

export { isLoggedIn, isAdmin };

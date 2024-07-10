import passport from "passport";

const logIn = passport.authenticate("google", { scope: ["email", "profile"] });

// ${req.originalUrl}
const gsCaller = passport.authenticate("google", {
    successRedirect: `/`,
    failureRedirect: "/api/v1/auth/failure",
});

const authFailer = (req, res) => {
    return res.render("authFailer");
};

const logOut = (req, res) => {
    req.logout((err) => {
        if (err) throw new Error("Error in logout");
    });
    return res.redirect("/");
};

export { logIn, gsCaller, authFailer, logOut };

import express from "express";
import { conf } from "./utlis/conf.js";
import path from "path";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "./middleware/auth.middleware.js";

const app = express();

// cors here

// other plugins
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.set("view engine", "pug");
app.set("views", path.join(import.meta.dirname, "views"));
app.use(express.static("public"));

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(
    session({
        secret: conf.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// import routers
import pagesRouter from "./routes/pages.routes.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import dbRouter from "./routes/local.db.routes.js";
import downloadRouter from "./routes/download.routes.js";
import userAuthRouter from "./routes/user.routes.js";
import appwriteRouter from "./routes/appwrite.db.routes.js";

app.use("/admin", adminRouter)

app.use("/", pagesRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", userAuthRouter);

app.use("/api/v1/download", downloadRouter);

app.use("/api/v1/db", dbRouter);
app.use("/api/v1/appwrite", appwriteRouter);

// Universal error handler for both API and template errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Determine the type of response
    if (req.accepts("html")) {
        // HTML response for page errors
        res.status(err.status || 500);
        res.render("404", {
            message: err.message || "Internal Server Error",
            error: process.env.NODE_ENV === "development" ? err : {},
        });
    } else if (req.accepts("json")) {
        // JSON response for API errors
        res.status(err.status || 500).json({
            success: false,
            message: err.message || "Internal Server Error",
            error: process.env.NODE_ENV === "development" ? err : {},
        });
    } else {
        // Plain text response (fallback)
        res.status(err.status || 500)
            .type("txt")
            .send(err.message || "Internal Server Error");
    }
});

export { app };

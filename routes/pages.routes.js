import { Router } from "express";
import {
    aboutPage,
    branchPage,
    homePage,
    pyqPage,
    subPage,
    navAuth,
    authorPage
} from "../controllers/pages.controllers.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import {
    checkBranchRoute,
    checkSemRoute,
    checkSubRoute,
} from "../middleware/pages.middleware.js";

const router = Router();

// non-dynamic routes
router.route("/").get(homePage);
router.route("/about").get(aboutPage);
router.route("/nav").get(navAuth);
router.route("/author").get(authorPage)

// params route
router.route("/:branch").get(checkBranchRoute, branchPage);
router.route("/:branch/:sem").get(checkSemRoute, subPage);
router.route("/:branch/:sem/:sub").get( pyqPage);

export default router;

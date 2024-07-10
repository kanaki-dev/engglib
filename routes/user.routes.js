import { Router } from "express";

import {
    authFailer,
    gsCaller,
    logIn,
    logOut,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/google").get(logIn);
router.route("/google/callback").get(gsCaller);
router.route("/failure").get(authFailer);
router.route("/logout").get(logOut);

export default router;

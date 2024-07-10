import { Router } from "express";
import { getUser, getFileData } from "../controllers/appwrite.db.controllers.js";

const router = Router();

router.route("/getuser").get(getUser);
router.route("/getFileData/:branch/:sem/:sub").get(getFileData)

export default router;

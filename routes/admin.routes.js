import { Router } from "express";
import {
    deleteFile,
    uploadFile,
    localFormReg,
    globalFormReg,
} from "../controllers/admin.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
import { adminPage } from "../controllers/pages.controllers.js";
import { isAdmin, isLoggedIn } from "../middleware/auth.middleware.js";
import localDB from "../db/index.js";

const router = Router();

router.route("/").get(isLoggedIn, isAdmin, adminPage);
router
    .route("/upload")
    .post(upload.single("pyqfile"), uploadFile);
router.route("/localDB").get((req, res) => {
    const isTrue = false;
    return res.status(200).render("admin", { isTrue });
});

router.route("/globalDB").get((req, res) => {
    const isTrue = true;
    const url = req.originalUrl;
    let error = url.split("=")[1];

    const branch = localDB.getBranch();
    const sem = localDB.getSem();
    const sub = localDB.getSub();
    const year = localDB.getYear();
    return res
        .status(200)
        .render("admin", { isTrue, error, branch, sem, sub, year });
});

router.route("/local-submit").get(localFormReg);
router
    .route("/global-submit")
    .post(upload.array("pyqfiles", 10), globalFormReg);

router.route("/delete/:id").delete(deleteFile);

export default router;

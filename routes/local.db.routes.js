import { Router } from "express";
import {
    addDataToBranch,
    getBranchData,
    deleteABranch,
    addDataToSem,
    getSemData,
    deleteASem,
    deleteASub,
    getSubData,
    addDataToSub,
} from "../controllers/local.db.controllers.js";

const router = Router();

router
    .route("/branch")
    .post(addDataToBranch)
    .get(getBranchData)
    .delete(deleteABranch);
router.route("/sem").post(addDataToSem).get(getSemData).delete(deleteASem);
router.route("/sub").post(addDataToSub).get(getSubData).delete(deleteASub);

export default router;

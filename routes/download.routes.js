import { Router } from "express";
import { downloadPdf } from "../controllers/pages.controllers.js";

const router = Router();

router.route("/:fileId").get(downloadPdf);

export default router;

import express from "express";
import multer from "multer";
import { uploadSSIMFile } from "../controllers/ssim.controller";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("ssimFile"), uploadSSIMFile);

export default router;

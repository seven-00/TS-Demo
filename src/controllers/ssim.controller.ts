import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { parseSSIMFile } from "../services/ssim.parser";
import { FlightRecord } from "../models/ssim.model";

// Upload & Parse SSIM File
export const uploadSSIMFile = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = req.file.path;
  const parsedData: FlightRecord[] = await parseSSIMFile(filePath);

  // Save JSON file
  const folderPath = path.join(__dirname, "../parsed-data");
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  const jsonFilePath = path.join(folderPath, "ssim_parsed_data.json");
  fs.writeFileSync(jsonFilePath, JSON.stringify(parsedData, null, 2), "utf-8");

  res.status(200).json({
    message: "File parsed successfully",
    parsedData,
    savedPath: jsonFilePath,
  });
});

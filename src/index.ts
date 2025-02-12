import express, { Request, Response, NextFunction } from "express";
import ssimRoutes from "./routes/ssim.routes";
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use('/ssim', ssimRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});
app.get("/", (req: Request, res: Response) => {
  res.send("Running");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
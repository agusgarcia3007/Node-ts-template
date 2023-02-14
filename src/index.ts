import express, { Application, Request, Response } from "express";
import connectDB from "./config/connectDB";

const app: Application = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Successfull setup");
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});

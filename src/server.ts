import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ text: "Hello bruh" });
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});



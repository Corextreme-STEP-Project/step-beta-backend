import express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/project-routes.js";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(projectRouter);

app.listen(port, () => {
  console.log("App is listening");
});

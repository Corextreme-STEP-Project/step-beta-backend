import express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/project-routes.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import reviewRouter from "./routes/reviews-routes.js";
import awardRouter from "./routes/awards-routes.js";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT;

// App Middleware
app.use(express.json());
app.use(cors());


// Define routes
app.use(projectRouter);
app.use(userRouter)
app.use(reviewRouter)
app.use(awardRouter)

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
});

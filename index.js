import express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/project-routes.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import reviewRouter from "./routes/reviews-routes.js";
import awardRouter from "./routes/awards-routes.js";
import tenderRouter from "./routes/tender-routes.js";
import submissionsRouter from "./routes/submissions-routes.js";
import milestoneRouter from "./routes/milestone.js";
import performanceRouter from "./routes/performancIndicator.js";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT;

// App Middleware
app.use(express.json());
app.use(cors()); 

// Define routes
app.use(projectRouter);
app.use(userRouter);
app.use(reviewRouter);
app.use(awardRouter);
app.use(tenderRouter);
app.use(submissionsRouter);
app.use(milestoneRouter);
app.use(performanceRouter);

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
});

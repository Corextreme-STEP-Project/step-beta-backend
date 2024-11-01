import express from "express";
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.listen(5000, () => {
    console.log('App is listening on port 5000')
});
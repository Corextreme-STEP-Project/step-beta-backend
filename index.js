import express from "express";
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT

app.use(express.json())

app.listen(port, () => {
    console.log('App is listening on port 5000')
});
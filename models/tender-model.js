import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// define the tender schema
const tenderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["open", "closed"],
        default: "open"
    }
}, {
    timestamps: true
});

// use the toJSON plugin to convert the mongoose document to a JSON object
tenderSchema.plugin(toJSON);

// export the tender model
export const TenderModel = model("Tender", tenderSchema);


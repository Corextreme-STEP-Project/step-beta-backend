// import the necessary modules
import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// define the submission schema 
const submissionSchema = new Schema({
    tenderId: {
        type: Schema.Types.ObjectId,
        ref: "Tender",
        required: true
    },
    bidderName: {
        type: String,
        required: true
    },
    bidAmount: {
        type: Number,
        required: true
    },
    bidDescription: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    submissionDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["submitted", "accepted", "rejected"],
        default: "submitted"
    }
}, {
    timestamps: true
});

// use the toJSON plugin to convert the mongoose document to a JSON object
submissionSchema.plugin(toJSON);

// export the submission model
export const SubmissionModel = model("Submission", submissionSchema);
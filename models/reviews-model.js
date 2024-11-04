import mongoose, { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const reviewSchema = new Schema({
    score: { type: Number, required: true,},
    comment: { type: String },
    status: { type: String, enum:['approved', 'rejected'], required: true },
    submission_id: {type: Types.ObjectId, required:true, ref: 'Submission'},
    tender_id: {type: Types.ObjectId, required:true, ref: 'Tender'},
}, {
    timestamps: true
});

reviewSchema.plugin(toJSON)
export const ReviewModel = model('review', reviewSchema)
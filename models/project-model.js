import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const projectSchema = new Schema({

}, {
    timestamps: true
});

projectSchema.plugin(toJSON);

export const userModel = model('user', projectSchema);
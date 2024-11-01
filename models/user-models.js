import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({

}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const userModel = model('user', userSchema);
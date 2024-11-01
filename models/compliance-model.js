import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const complianceSchema = new Schema({
project
user
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const complianceModel = model('compliance', complianceSchema);
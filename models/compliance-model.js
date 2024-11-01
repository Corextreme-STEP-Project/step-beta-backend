import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const complianceSchema = new Schema({
projectId: {type: Types.ObjectId, required: true, ref: 'project'},
complianceStatus: {type: Boolean, required: true},
complianceReport: {type: String},
correctiveActions: {type: String}
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const complianceModel = model('compliance', complianceSchema);
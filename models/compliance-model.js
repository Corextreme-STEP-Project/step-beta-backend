import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const complianceSchema = new Schema({
  
  project: { type: Types.ObjectId, ref: 'project' },
  complianceStatus: { type: String, enum: ['compliant', 'non-compliant', 'pending'], default: 'pending' },
  notes: [{ type: String }],
  checkedBy: [{ type: Types.ObjectId, ref: 'user' }],
}, { timestamps: true }
);

complianceSchema.plugin(toJSON);

export const complianceModel = model('Compliance', complianceSchema)


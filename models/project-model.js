import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const projectSchema = new Schema({
    projectOwner: { type: Types.ObjectId, required: true, ref: 'user' },
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    scope: { type: String, required: true },
    budget: { type: Number, required: true },
    keyRequirements: { type: [String], required: true },
    projectStatus: { type: String, default: 'Maturation', enum: ['Maturation', 'Procurement', 'Execution', 'Monitoring'] },
    projectBegins: { type: Date, default: Date.now },
    projectEnds: { type: Date },
    duration: { type: String },
    compliance: { type: Types.ObjectId, ref: 'compliance' }
}, {
    timestamps: true
});

projectSchema.plugin(toJSON);

export const projectModel = model('project', projectSchema);
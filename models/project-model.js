import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const projectSchema = new Schema({

    // projectOwner: { type: Types.ObjectId, required: true, ref: 'user' },

    // user: { type: Types.ObjectId, required: true, ref: 'user' },

    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    scope: { type: String, required: true },
    budget: { type: Number, required: true },
    projectValue: {type: Number},
    keyRequirements: { type: [String], required: true },
    projectBegins: { type: Date, default: Date.now },
    projectEnds: { type: Date },
    projectDuration: { type: String },
    projectStatus: { type: String, default: 'Maturation', enum: ['Maturation', 'Procurement', 'Execution', 'Monitoring', 'Completed', 'On-hold', 'Cancelled'] },
    statusDescription: { type: String },
    statusChangeAt: { type: Date, default: Date.now },
    compliance: { type: Types.ObjectId, ref: 'Compliance' }
}, {
    timestamps: true
});

projectSchema.plugin(toJSON);

// export the model
export const projectModel = model('project', projectSchema);

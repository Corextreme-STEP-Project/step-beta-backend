import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const projectSchema = new Schema({
    user: {type: Types.ObjectId, required: true, ref: 'user'},
    name: { type: String, required: true },
    scope: { type: String, required: true },
    budget: { type: Number, required: true },
    keyRequirements: { type: [String], required: true },
    status: {
        type: String,
        default: 'Maturation',
        enum: [
            'Maturation',
            'Procurement',
            'Execution',
            'Monitoring'
        ],
    
    },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
}, {
    timestamps: true
});

projectSchema.plugin(toJSON);

export const ProjectModel = model('Project', projectSchema);
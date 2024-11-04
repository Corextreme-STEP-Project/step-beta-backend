import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: { type: String, enum: ['Project Owner', 'Project Regulator'] },
    governmentId: { type: String },
    projects: [{type: Types.ObjectId, ref: 'project'}],  
    compliance: [{type: Types.ObjectId, ref: 'compliance'}]
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const userModel = model('user', userSchema);
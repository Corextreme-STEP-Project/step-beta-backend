import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    role: { type: String, enum: ['Project Owner', 'Project Regulator'], required: true },
    governmentId: { type: String },
    projects: [{type: Types.ObjectId, ref: 'project'}],  
    compliance: [{type: Types.ObjectId, ref: 'compliance'}]
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('user', userSchema);
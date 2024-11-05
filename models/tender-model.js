import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// define the tender schema
const tenderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tenderType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                return v > new Date();
            },
            message: "Deadline must be in the future"
        }
    },
    status: {
        type: String,
        enum: ["open", "closed", "draft", "cancelled"],
        default: "draft"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    attachments: [{
        name: {
            type: String,
            required: true,
        },
        url: String,
        mimeType: {
            type: String,
            required: true,
            enum: [
                'application/pdf',
                'application/msword',
                'image/jpeg',
                'image/png'
        ]
        }
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

// add index for common queries
tenderSchema.index({ status: 1, deadline: -1});
tenderSchema.index({ createdBy: 1});
tenderSchema.index({ isDeleted: 1});
// use the toJSON plugin to convert the mongoose document to a JSON object
tenderSchema.plugin(toJSON);

// export the tender model
export const TenderModel = model("Tender", tenderSchema);


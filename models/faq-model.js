import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const faqSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: ['GENERAL', 'PROCUREMENT', 'TECHNICAL', 'SECURITY', 'COMPLIANCE', 'BILLING']
    },
    question: {
        type: String,
        required: true,
        index: 'text'
    },
    answer: {
        type: String,
        required: true
    },
    tags: [String],
    helpfulCount: {
        type: Number,
        default: 0
    },
    notHelpfulCount: {
        type: Number,
        default: 0
    },
    // relatedDocuments: [{ type: Schema.Types.ObjectId, ref: 'documentMetadata' }],
    // lastUpdated: {
    //     type: Date,
    //     default: Date.now
    // },
    // status: {
    //     type: String,
    //     enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'],
    //     default: 'DRAFT'
    // },

}, {
    timestamps: true
});


faqSchema.plugin(toJSON);

export const FAQModel = model('faq', faqSchema);
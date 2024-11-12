import mongoose from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import { version } from "joi";


// define the document schema
export const documentMetadataSchema = new Schema({
    documentId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    documentType: { type: String, enum: ['LEGAL_AGREEMENT', 'CONTRACT', 'CIRCULAR', 'POLICY'], required: true },
    status: { type: String, enum: ['DRAFT', 'REVIEW', 'APPROVED', 'EXPIRED'], required: true },
    version: { type: Number, default: 1 },
    author: { type: String, required: true },
    department: { type: String, required: true },
    securityLevel: { type: String, enum: ['PUBLIC', 'INTERNAL', 'CONFIDENTIAL', 'RESTRICTED'], required: true },
    createdDate: { type: Date, default: Date.now },
    lastModifiedDate: { type: Date, default: Date.now },
    relatedDocuments: [{ type: Schema.Types.ObjectId, ref: 'document' }],

}, {
    timestamps: true
});

// add text index for search
documentMetadataSchema.index({
    title: 'text',
    author: 'text',
    department: 'text',
    tags: 'text'
});

//  add plugin
documentMetadataSchema.plugin(toJSON)

export const DocumentMetadataModel = model('documentMetadata', documentMetadataSchema);
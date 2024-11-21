import Joi from "joi";

export const createDocumentMetadataValidator = Joi.object({
    documentId: Joi.string().required(),
    title: Joi.string().required(),
    documentType: Joi.string().required(),
    status: Joi.string(),
    version: Joi.number(),
    author: Joi.string().required(),
    department: Joi.string().required(),
    securityLevel: Joi.string(),
    createdDate: Joi.date(),
    lastModifiedDate: Joi.date(),
    relatedDocuments: Joi.array().items(Joi.string())
})
export const UpdateDocumentMetadataValidator = Joi.object({
    title: Joi.string().required(),
    documentType: Joi.string().required(),
    status: Joi.string(),
    version: Joi.number(),
    author: Joi.string().required(),
    department: Joi.string().required(),
    securityLevel: Joi.string(),
    createdDate: Joi.date(),
    lastModifiedDate: Joi.date(),
    relatedDocuments: Joi.array().items(Joi.string())
})
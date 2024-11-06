import e from "express";
import Joi from "joi";
import { isValidObjectId } from "mongoose";

export const createSubmissionValidator = Joi.object({
    tenderId: Joi.custom(isValidObjectId).required(),
    bidderName: Joi.string().required(),
    bidAmount: Joi.number().required(),
    bidDescription: Joi.string().required(),
    document: Joi.string().required(),
    submissionDate: Joi.date()
        .min(new Date()
        .setHours(0, 0, 0, 0))
        .max(new Date()
        .setHours(23, 59, 59, 999))
        .required(),
    status: Joi.string().required()
});

export const updateSubmissionValidator = Joi.object({
    tenderId: Joi.custom(isValidObjectId),
    bidderName: Joi.string(),
    bidAmount: Joi.number(),
    bidDescription: Joi.string(),
    document: Joi.string(),
    submissionDate: Joi.date(),
    status: Joi.string()
});

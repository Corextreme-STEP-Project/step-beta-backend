import { FAQModel } from "../models/faq-model.js";

// Create a new FAQ
export const createFAQ = async (req, res, next) => {
    try {
        const faq = await FAQModel.create(req.body);
        res.status(201).json(faq);
    } catch (error) {
        next(error);
    }
}

// Update an FAQ
export const updateFAQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faq = await FAQModel.findByIdAndUpdate(id, { ...req.body, lastUpdated: new Date() }, { new: true });
        res.status(200).json(faq);
    } catch (error) {
        next(error);
    }
}

// Search FAQs
export const searchFAQs = async (query) => {
    const searchCriteria = {};

    if (query.text) {
        searchCriteria.$text = { $search: query.text };
    }

    if (query.category) {
        searchCriteria.category = query.category;
    }
if (query.tags) {
    searchCriteria.tags = { $in: query.tags};
}
    return await FAQModel
        .find(searchCriteria)
        .sort({ helfulCount: -1 })
        .limit(query.limit || 10);
}

// Record FAQ Feedback
export const recordFAQFeedback = async(id, isHelpful) => {
    const updateField = isHelpful ? 'helpfulCount' : 'notHelpfulCount';
    return await FAQModel.findByIdAndUpdate(id, { [updateField]: { $inc: { [updateField]: 1 } } }, { new: true });
}
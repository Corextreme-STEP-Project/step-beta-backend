import { FAQModel } from "../models/faq-model.js";

// Create a new FAQ
export const createFAQ = async (req, res, next) => {
    try {
        const faq = await FAQModel.create(req.body);
        await faq.save();
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
export const searchFAQs = async (req, res, next) => {
    try {
        const { text, category, tags, limit = 10 } = req.query;
        const searchCriteria = {};

       if (text) searchCriteria.$text = { $search: text };
       if (category) searchCriteria.category = category;
       if (tags) searchCriteria.tags = { $all: tags.split(',') };
        const faqs = await FAQModel
            .find(searchCriteria)
            .sort({ helfulCount: -1 })
            .limit(parseInt(limit));
        res.status(200).json(faqs);
    } catch (error) {
        next(error);
    }
}

// Record FAQ Feedback
export const recordFAQFeedback = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { isHelpful } = req.body;
        
        const updateField = isHelpful ? 'helpfulCount' : 'unhelpfulCount';
        const faq = await FAQModel.findByIdAndUpdate(id, { $inc: { [updateField]: 1 } }, { new: true });
        res.status(200).json(faq);
    } catch (error) {
        next(error);
    }
}
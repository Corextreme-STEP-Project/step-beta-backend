import { TenderModel } from "../models/tender-model.js";

// create a new tender
export const createTender = async (req, res, next) => {
    try {
        const tender = await TenderModel.create(req.body);
        res.status(201).json(tender);
    } catch (error) {
        next(error);
    }
};

// get all tenders
export const getAllTenders = async (req, res, next) => {
    try {
        const tenders = await TenderModel.find();
        res.status(200).json(tenders);
    } catch (error) {
        next(error);
    }
};

// get a single tender by id
export const getTenderById = async (req, res, next) => {
    try {
        const tender = await TenderModel.findById(req.params.id);
        if (!tender) {
            return res.status(404).json({ message: "Tender not found" });
        }
        res.status(200).json(tender);
    } catch (error) {
        next(error);
    }
};

// update a tender by id
export const updateTenderById = async (req, res, next) => {
    try {
        const tender = await TenderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tender) {
            return res.status(404).json({ message: "Tender not found" });
        }
        res.status(200).json(tender);
    } catch (error) {
        next(error);
    }
};

// delete a tender by id
export const deleteTenderById = async (req, res, next) => {
    try {
        await TenderModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tender deleted successfully" });
    } catch (error) {
        next(error);
    }
};


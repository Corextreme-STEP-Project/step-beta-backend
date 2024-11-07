import { TenderModel } from "../models/tender-model.js";
import { createTenderValidator, updateTenderValidator } from "../validators/tender-validator.js";

// create a new tender
export const createTender = async (req, res, next) => {
    try {
        // check if user is authenticated
        // if (!req.user) {
        //     return res.status(401).json({ message: "Unauthorized" });
        // }

        // validate input
        const { error, value } = createTenderValidator.validate({ 
            ...req.body, 
            attachments: req.files?.filename, });
        if (error) {
            return res.status(422).json({ message: error.details[0].message });
        };

        // create tender
        await TenderModel.create({
            ...value,
            createdBy: req.auth._id
        });

        // send success response
        res.status(201).json({ message: "Tender created successfully" });   
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

        const { error, value } = updateTenderValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const tender = await TenderModel.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.auth._id
            },
            
            value,
            { new: true });
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
        // find the tender by its id and check if user is authorized to delete it
        const tender = await TenderModel.findById(req.params.id);
        if (!tender) {
            return res.status(404).json({ message: "Tender not found" });
        }
        if (tender.createdBy.toString() !== req.auth.id) {
            return res.status(403).json({ message: "You do not have permission to delete this tender" });
        }
        await TenderModel.findOneAndDelete(req.params.id);
        res.status(200).json({ message: "Tender deleted successfully" });
    } catch (error) {
        next(error);
    }
};



import { SubmissionModel } from "../models/submissions-model.js";

export const createSubmission = async (req, res, next) => {
    try {
        const { error, value } = createSubmissionValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message})
        }
        const submission = await SubmissionModel.create(value);
        res.status(201).json(submission);
    } catch (error) {
        next(error);
    }
};

export const getSubmission = async (req, res, next) => {
    try {
        const submission = await SubmissionModel.findById(req.params.id);
        res.status(200).json(submission);
    } catch (error) {
        next(error);
    }
};

export const updateSubmission = async (req, res, next) => {
    try {
        const { error, value } = updateSubmissionValidator.validate(req.body);
        if (error) {
            return res.status(422).json({ message: error.details[0].message });
        }
        const submission = await SubmissionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(submission);
    } catch (error) {
        next(error);
    }
};

export const deleteSubmission = async (req, res, next) => {
    try {
        await SubmissionModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Submission deleted" });
    } catch (error) {
        next(error);
    }
};

export const getSubmissions = async (req, res, next) => {
    try {
        const submissions = await SubmissionModel.find();
        res.status(200).json(submissions);
    } catch (error) {
        next(error);
    }
};

export const getSubmissionsByUserId = async (req, res, next) => {
    try {
        const submissions = await SubmissionModel.find({ userId: req.params.userId });
        res.status(200).json(submissions);
    } catch (error) {
        next(error);
    }
};


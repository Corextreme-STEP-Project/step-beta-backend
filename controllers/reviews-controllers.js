import { addReviewValidate, updateReviewValidate } from "../validators/reviews-validators.js";
import { ReviewModel } from "../models/reviews-model.js";

export const addReview = async (req, res, next) => {
    try {
        const { error, value } = addReviewValidate.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const review = await ReviewModel.create(value)
        res.status(201).json(review)
    } catch (error) {
        next(error)
    }
}

export const getAllReviews = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 100, skip = 0 } = req.query;
        const review = await ReviewModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip)
        res.status(200).json(review)
    } catch (error) {
        next(error)
    }
}

export const updateReviews = async (req,res,next) => {
try {
        const {error,value} = updateReviewValidate.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const review = await ReviewModel.findByIdAndUpdate(req.params.id, value, { new: true })
        res.json(review)
} catch (error) {
    next(error)
}
}

export const deleteReviews = async (req,res,next) => {
try {
    await ReviewModel.findByIdAndDelete(req.params.id)
    res.status(200).json('Review deleted successfully')
} catch (error) {
    next(error)
}
}
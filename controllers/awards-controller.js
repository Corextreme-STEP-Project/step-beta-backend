import { awardModel } from "../models/awards-model.js";
import { addAwardValidate, updateAwardValidate} from "../validators/awards-validators.js";
 
export const addAward = async (req, res, next) => {
    try {
        const { error, value } = addAwardValidate.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const award = await awardModel.create(value)
        res.status(201).json(award)
    } catch (error) {
        next(error)
    }
}

export const getAllAwards = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 100, skip = 0 } = req.query;
        const award = await awardModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip)
        res.status(200).json(award)
    } catch (error) {
        next(error)
    }
}

export const updateAwards = async (req,res,next) => {
    try {
            const {error,value} = updateAwardValidate.validate(req.body)
            if (error) {
                return res.status(422).json(error)
            }
            const award = await awardModel.findByIdAndUpdate(req.params.id, value, { new: true })
            res.json(award)
    } catch (error) {
        next(error)
    }
    }

    export const deleteAward = async (req,res,next) => {
        try {
            await awardModel.findByIdAndDelete(req.params.id)
            res.status(200).json('Award deleted successfully')
        } catch (error) {
            next(error)
        }
        }
    

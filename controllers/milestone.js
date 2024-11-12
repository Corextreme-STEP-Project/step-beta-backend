import { MilestoneModel } from "../models/milestone.js";


export const createMilestone = async (req, res, next) => {
  try {
   const milestone =   await MilestoneModel.create(req.body)
      res.status(201).json(milestone)
  } catch (error) {
      next(error);
  }
}


export const getAllMilestones = async (req, res, next) => {
  try {
      const { filter = "{}", sort = "{}", limit = 100, skip = 0 } = req.query;
      const milestone = await MilestoneModel
          .find(JSON.parse(filter))
          .sort(JSON.parse(sort))
          .limit(limit)
          .skip(skip);
      res.status(200).json(milestone)
  } catch (error) {
      next(error)
  }
}

export const getMilestoneById = async (req, res, next) => {
  try {
      const milestone = await MilestoneModel.findById(req.params.id)
      res.status(201).json(milestone)
  } catch (error) {
      next(error)
  }
}

import { PerformanceIndicatorModel } from '../models/performance_indicator.js';
import { MilestoneModel } from '../models/milestone.js';
import { checkPerformance } from '../utils/checkPerformance.js';

// export const createPerformanceIndicator = async (req, res) => {
//     try {
//       const { milestoneId } = req.body; // Extract milestoneId from the request body
//       const milestone = await MilestoneModel.findById(milestoneId);
//       if (!milestone) {
//         return res.status(404).json({ error: 'Milestone not found' });
//       }
  
//       const indicator = new PerformanceIndicatorModel({ ...req.body, milestoneId: milestone._id });
//       await indicator.save();
//       milestone.performanceIndicators.push(indicator._id);
//       await milestone.save();
  
//       res.status(201).json(indicator);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   };
  

  export const addPerfomanceIndicator = async (req, res, next) => {
    try {
        
      const performance =  await PerformanceIndicatorModel.create(req.body)
        res.status(201).json(performance)
    } catch (error) {
        next(error);
    }
}

  
export const getAllPerformanceIndicators = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 100, skip = 0 } = req.query;
        const performance = await PerformanceIndicatorModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip);
        res.status(200).json(performance)
    } catch (error) {
        next(error)
    }
}

export const getPerformanceById = async (req, res, next) => {
    try {
        const performance = await PerformanceIndicatorModel.findById(req.params.id)
        res.status(201).json(performance)
    } catch (error) {
        next(error)
    }
}
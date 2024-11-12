import { Router } from "express";
import { createMilestone, getAllMilestones, getMilestoneById } from "../controllers/milestone.js";


const milestoneRouter = Router()

milestoneRouter.post('/milestone', createMilestone);
milestoneRouter.get('/milestone', getAllMilestones);
milestoneRouter.get('/milestone/:id', getMilestoneById);
export default milestoneRouter;

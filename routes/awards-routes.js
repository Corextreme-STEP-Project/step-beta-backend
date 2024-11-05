import { Router } from "express";
import { addAward, deleteAward, getAllAwards, updateAwards } from "../controllers/awards-controller.js";
import { isAuthenticated } from "../middleware/auth.js";



const awardRouter = Router();

awardRouter.post('/tender/awards',isAuthenticated, addAward)
awardRouter.get('/tender/awards',isAuthenticated, getAllAwards)
awardRouter.patch('/tender/awards/:id',isAuthenticated, updateAwards)
awardRouter.delete('/tender/awards/:id',isAuthenticated, deleteAward)



export default awardRouter

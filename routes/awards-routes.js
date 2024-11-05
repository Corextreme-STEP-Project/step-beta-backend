import { Router } from "express";
import { addAward, deleteAward, getAllAwards, updateAwards } from "../controllers/awards-controller.js";



const awardRouter = Router();

awardRouter.post('/tender/awards', addAward)
awardRouter.get('/tender/awards', getAllAwards)
awardRouter.patch('/tender/awards', updateAwards)
awardRouter.delete('/tender/awards', deleteAward)



export default awardRouter

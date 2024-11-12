import { Router } from "express";
import { addPerfomanceIndicator, getAllPerformanceIndicators, getPerformanceById} from "../controllers/perfomanceIndicator.js";


const performanceRouter = Router();

performanceRouter.post('/performanceindicator', addPerfomanceIndicator);
performanceRouter.get('/performanceindicator', getAllPerformanceIndicators);
performanceRouter.get('/performanceindicator/:id', getPerformanceById);


export default performanceRouter;

import { Router } from "express";
import { addReview, deleteReviews, getAllReviews, updateReviews } from "../controllers/reviews-controllers.js";


const reviewRouter = Router();

reviewRouter.post('/tender/reviews', addReview)
reviewRouter.get('/tender/reviews', getAllReviews)
reviewRouter.patch('/tender/reviews', updateReviews)
reviewRouter.patch('/tender/reviews', deleteReviews)


export default reviewRouter

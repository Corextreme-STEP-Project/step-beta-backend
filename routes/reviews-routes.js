import { Router } from "express";
import { addReview, deleteReviews, getAllReviews, updateReviews } from "../controllers/reviews-controllers.js";
import { isAuthenticated } from "../middleware/auth.js";


const reviewRouter = Router();

reviewRouter.post('/tender/reviews',isAuthenticated, addReview)
reviewRouter.get('/tender/reviews',isAuthenticated, getAllReviews)
reviewRouter.patch('/tender/reviews/:id',isAuthenticated, updateReviews)
reviewRouter.delete('/tender/reviews/:id',isAuthenticated, deleteReviews)


export default reviewRouter

import { Router } from "express";
import { createFAQ, searchFAQs, updateFAQ, recordFAQFeedback } from "../controllers/faq-controller.js";
import { isAuthenticated } from "../middleware/auth.js";

// use router
const faqRouter = Router();

// define routes
faqRouter.post("/faq", isAuthenticated, createFAQ);
faqRouter.get("/faq/search", searchFAQs);
faqRouter.patch("/faq/:id", isAuthenticated, updateFAQ);
faqRouter.post("/faq/:id/feedback", recordFAQFeedback);

export default faqRouter;
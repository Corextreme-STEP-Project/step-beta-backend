import { Router } from "express";
import { createSubmission, getSubmission, getSubmissions, getSubmissionsByUserId, updateSubmission, deleteSubmission } from "../controllers/submissions-controller.js";

// middle wares
import { isAuthenticated, hasPermission } from "../middleware/auth.js";

const submissionsRouter = Router();

// define routes
submissionsRouter.post('/submissions',isAuthenticated, hasPermission('create_submission'), createSubmission);

submissionsRouter.get('/submissions',isAuthenticated, getSubmissions);

submissionsRouter.get('/submissions/:id',isAuthenticated, getSubmission);

submissionsRouter.patch('/submissions/:id',isAuthenticated, hasPermission('update_submission'), updateSubmission);

submissionsRouter.delete('/submissions/:id',isAuthenticated, hasPermission('delete_submission'), deleteSubmission);

submissionsRouter.get('/submissions/user/:userId',isAuthenticated, getSubmissionsByUserId);

export default submissionsRouter
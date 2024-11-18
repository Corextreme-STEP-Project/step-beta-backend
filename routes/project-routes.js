import { Router } from "express";
import {
  createProject,
  getProject,
  getProjects,
  updateProjectStatus,
} from "../controllers/project-controller.js";
import { hasPermission, isAuthenticated } from "../middleware/auth.js";
// create router

const projectRouter = Router();

// define routes

projectRouter.post(
  "/projects/add",
  isAuthenticated,
  hasPermission("create_project"),
  createProject
);

projectRouter.get("/projects", getProjects);

projectRouter.get("/projects/:id", getProject);

projectRouter.patch("/projects/:id/status", updateProjectStatus);

export default projectRouter;

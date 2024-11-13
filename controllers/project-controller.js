import { projectModel } from "../models/project-model.js";
import {
  scheduleProjectDeadlineNotification,
  scheduleStatusUpdateNotfication,
} from "../utils/scheduler-project-deadline.js";
import {
  createProjectValidator,
  projectStatusUpdate,
} from "../validators/project-validator.js";

export const createProject = async (req, res, next) => {
  try {
    const { error, value } = createProjectValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // create project using validated input
    const newProject = await projectModel.create(value);
    // schedule notification for project deadline 3 days before projectEnds
    if (newProject.projectEnds) {
      scheduleProjectDeadlineNotification(
        newProject.projectEnds,
        newProject._id,
        io
      );
    }
    // send success response
    res.status(201).json("Project created successfully");
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await projectModel.find();

    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    //   get id from database
    const projects = await projectModel.findById(id);
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

export const updateProjectStatus = async (req, res, next) => {
  try {
    const statuses = ["Maturation", "Procurement", "Execution", "Monitoring"];
    const { projectStatus } = req.body;
    // validation
    const { error, value } = projectStatusUpdate.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }

    // Find Project by Id
    const project = await projectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json("Project not found!");
    }

    // Check if the requested status is the next logical status from the current one
    const currentProjectStatusIndex = statuses.indexOf(project.projectStatus);
    const newProjectStatusIndex = statuses.indexOf(projectStatus);

    if (newProjectStatusIndex !== currentProjectStatusIndex + 1) {
      return res.status(400).json({
        message: `Cannot move from ${project.projectStatus} to ${projectStatus}. Follow the order`,
      });
    }

    // Update project status
    const updatedProject = await projectModel.findByIdAndUpdate(
      req.params.id,
      value
    );

    // schedule notification after project status is updated
    if (updatedProject) {
      scheduleStatusUpdateNotfication(
        updatedProject._id,
        updatedProject.projectStatus,
        io
      );
    }
    // Response
    res.status(200).json("Project Status updated Successfully!");
  } catch (error) {
    next(error);
  }
};

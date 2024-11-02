import { projectModel } from "../models/project-model.js";
import { createProjectValidator } from "../validators/project-validator.js";

export const createProject = async (req, res, next) => {
  try {
    const { error, value } = createProjectValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // create project using validated input
    await projectModel.create(value);
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

import { complianceModel } from "../models/compliance-model.js";
import { projectModel } from "../models/project-model.js";
import {  postComplianceValidator, updateComplianceValidator } from "../validators/compliance-validator.js";


// Create Compliance Record
export const createComplianceRecord = async (req, res, next) => {
  try {
    const { error, value } = postComplianceValidator.validate(req.body);
    if (error) {
      return res.status(422).json({ message: error.details[0].message });
    }

    const projectId = req.params.projectId;
    const checkedBy = req.auth.id; 

    const project = await projectModel.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }

    const { complianceStatus, notes } = value;

    // Append projectId and checkedBy fields to the compliance record
    const complianceRecord = {
      complianceStatus,
      notes,
      project: projectId,
      checkedBy
    };

    // Create compliance record
    await complianceModel.create(complianceRecord);

    res.status(201).json({ message: "Compliance record created successfully" });
  } catch (error) {
    next(error);
  }
};



 // Get all compliance records
export const getComplianceRecords = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}" } = req.query

    const complianceRecords = await complianceModel.find(JSON.parse(filter)).sort(JSON.parse(sort)).populate("project", "projectTitle projectStatus").populate("checkedBy", "firstName middleName lastName role");

    res.status(200).json(complianceRecords);
  } catch (error) {
    next(error);
  }
};


// Get Compliance Record by ID
export const getComplianceRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const complianceRecord = await complianceModel.findById(id).populate("project", "projectTitle projectStatus").populate("checkedBy", "firstName middleName lastName role");

    if (!complianceRecord) {
      return res.status(404).json("Compliance record not found!");
    }

    res.json(complianceRecord);
  } catch (error) {
    next(error);
  }
};

// Update Compliance Status
export const updateComplianceStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { complianceStatus, notes } = req.body;

    // Validation
    const { error, value } = updateComplianceValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }

    // Check if compliance record exists
    const complianceRecord = await complianceModel.findById(id);
    if (!complianceRecord) {
      return res.status(404).json("Compliance record not found!");
    }

    // Update with status and notes 
    complianceRecord.complianceStatus = complianceStatus;
    if (notes) {
      complianceRecord.notes = notes;
    }

    await complianceRecord.save();

    res.status(200).json("Compliance status updated successfully");
  } catch (error) {
    next(error);
  }
};

// Delete Compliance Record
export const deleteComplianceRecord = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the compliance record exists
    const complianceRecord = await complianceModel.findById(id);
    if (!complianceRecord) {
      return res.status(404).json("Compliance record not found!");
    }

    // Delete the compliance record.
    await complianceModel.findByIdAndDelete(id);

    res.status(200).json("Compliance record deleted successfully");
  } catch (error) {
    next(error);
  }
};

import { Router } from "express";
import { createComplianceRecord, deleteComplianceRecord, getComplianceRecord, getComplianceRecords, updateComplianceStatus } from "../controllers/compliance-controller.js";
import { hasPermission, isAuthenticated } from "../middleware/auth.js";

// use router
const complianceRouter = Router();

// define routes
complianceRouter.post("/compliance/:projectId", isAuthenticated, hasPermission('get_project',  'create_compliance'), createComplianceRecord);


complianceRouter.get("/compliance", isAuthenticated, getComplianceRecords);

complianceRouter.get("/compliance/:id", isAuthenticated, getComplianceRecord);

complianceRouter.patch("/compliance/:id", isAuthenticated, hasPermission('update_compliance'),updateComplianceStatus);

complianceRouter.delete("/compliance/:id", isAuthenticated, hasPermission('delete_compliance'),deleteComplianceRecord);

export default complianceRouter;

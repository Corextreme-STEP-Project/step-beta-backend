import { Router } from "express";
import { createCompliance, deleteComplianceRecord, getComplianceRecord, getComplianceRecords, updateComplianceStatus } from "../controllers/compliance-controller.js";
import { hasPermission, isAuthenticated } from "../middleware/auth.js";

// use router
const complianceRouter = Router();

// define routes
complianceRouter.post("/compliance/add", isAuthenticated, hasPermission('create_compliance'),createCompliance);

complianceRouter.get("/compliance", isAuthenticated, getComplianceRecords);

complianceRouter.get("/compliance/:id", isAuthenticated, getComplianceRecord);

complianceRouter.patch("/compliance/:id", isAuthenticated, hasPermission('update_compliance'),updateComplianceStatus);

complianceRouter.delete("/compliance/:id", isAuthenticated, hasPermission('delete_compliance'),deleteComplianceRecord);

export default complianceRouter;

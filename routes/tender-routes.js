import { Router } from "express";
import { createTender, getAllTenders, getTenderById, updateTenderById, deleteTenderById } from "../controllers/tender-controller.js";
import { documentUpload } from "../middleware/upload.js";
import { hasPermission, isAuthenticated } from "../middleware/auth.js";

// use router
const tenderRouter = Router();

// define routes
tenderRouter.post("/tender/add", isAuthenticated, hasPermission('create_tender'),createTender);

tenderRouter.get("/tender", getAllTenders);

tenderRouter.get("/tender/:id", getTenderById);

tenderRouter.patch("/tender/:id", updateTenderById);

tenderRouter.delete("/tender/:id", isAuthenticated , hasPermission('delete_tender'),deleteTenderById);

export default tenderRouter
import { Router } from "express";
import { createTender, getAllTenders, getTenderById, updateTenderById, deleteTenderById } from "../controllers/tender-controller.js";

// use router
const tenderRouter = Router();

// define routes
tenderRouter.post("/tender/add", createTender);
tenderRouter.get("/tender", getAllTenders);
tenderRouter.get("/tender/:id", getTenderById);
tenderRouter.patch("/tender/:id", updateTenderById);
tenderRouter.delete("/tender/:id", deleteTenderById);

export default tenderRouter
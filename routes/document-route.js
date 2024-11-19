import { Router } from "express";
import { createDocument, deleteDocument, getAllDocuments, getDocument } from "../controllers/document-controller.js";
import { fileUpload } from "../middleware/upload.js";

const documentRouter = Router();

documentRouter.post('/documents', fileUpload.single('file'), createDocument);

documentRouter.get('/documents', getAllDocuments);

documentRouter.get('/documents/:id', getDocument);

documentRouter.delete('/documents/:id', deleteDocument);



export default documentRouter;
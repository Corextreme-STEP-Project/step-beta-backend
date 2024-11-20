import { Router } from "express";
import { createDocument, deleteDocument, getAllDocuments, getDocument, updateDocument } from "../controllers/document-controller.js";
import { fileUpload } from "../middleware/upload.js";

const documentRouter = Router();

documentRouter.post('/documents', fileUpload.single('file'), createDocument);

documentRouter.get('/documents', getAllDocuments);

documentRouter.get('/documents/:id', getDocument);

documentRouter.delete('/documents/:id', deleteDocument);

documentRouter.patch('/documents/:id',updateDocument)



export default documentRouter;
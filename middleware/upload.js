import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const documentUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessKey: process.env.SAVE_FILES_UPLOAD,
        relativePath: '/procurement_api/Tenders/*',
    }),
    preservePath: true
});

export const submissionsUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessKey: process.env.SAVE_FILES_UPLOAD,
        relativePath: '/procurement_api/Submissions/*',
    }),
    preservePath: true
});
import { Router } from "express";
import { addNotification, getNotification, updateNotification } from "../controllers/notification.js";

const notificationRouter = Router();

notificationRouter.post('/notifications/create', addNotification);

notificationRouter.post('/notifications/mark-as-read', updateNotification)

notificationRouter.get('/notifications/:userId', getNotification)

export default notificationRouter
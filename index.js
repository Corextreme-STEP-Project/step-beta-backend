import express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/project-routes.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import reviewRouter from "./routes/reviews-routes.js";
import awardRouter from "./routes/awards-routes.js";
import tenderRouter from "./routes/tender-routes.js";
import submissionsRouter from "./routes/submissions-routes.js";
import milestoneRouter from "./routes/milestone.js";
import performanceRouter from "./routes/performancIndicator.js";
import faqRouter from "./routes/faq-routes.js";

import http from 'http';
import { Server } from "socket.io";
import notificationRouter from "./routes/notification.js";
import documentRouter from "./routes/document-route.js";
import complianceRouter from "./routes/compliance-routes.js";
import { scheduleNotifications } from "./services/compliance.js";
import ticketRoute from "./routes/ticketRoute.js";


await mongoose.connect(process.env.MONGO_URI);

const app = express();
const server = http.createServer(app);
const io = new Server(server);
// export default io;

const port = process.env.PORT;

// App Middleware
app.use(express.json());
app.use(cors()); 

// Define routes
app.use(projectRouter);
app.use(userRouter);
app.use(reviewRouter);
app.use(awardRouter);
app.use(tenderRouter);
app.use(submissionsRouter);
app.use(complianceRouter)
app.use(notificationRouter);
app.use(faqRouter);
app.use(documentRouter)
app.use(ticketRoute)




// Store connected  clients in memory
export const connectedClients = new Map();

app.use(milestoneRouter);
app.use(performanceRouter);


io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('register', (userId) => {
        connectedClients.set(userId, socket.id);
    });

    socket.on('disconnect', () => {
        connectedClients.forEach((value, key) => {
            if (value === socket.id) connectedClients.delete(key);
        });
        console.log('Client disconnected:', socket.id);
    });
});

// Fuction to send notification to a user if they are connected
export const sendNotification = (userId, notification) => {
    const socketId = connectedClients.get(userId.toString());

    if (socketId) {
        io.to(socketId).emit('notification', notification);
    }
};

scheduleNotifications()

server.listen(port, () => {
    console.log(`Server is listening on ${port}`)
});
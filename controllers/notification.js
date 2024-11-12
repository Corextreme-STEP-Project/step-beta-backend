// import io from "../index.js";
import { sendNotification } from "../index.js";
import { NotificationModel } from "../models/notification.js";


// // Store connected  clients in memory
// export const connectedClients = new Map();

// io.on('connection', (socket) => {
//     console.log('Client connectd:', socket.id);

//     socket.on('register', (userId) => {
//         connectedClients.set(userId, socket.id);
//     });

//     socket.on('disconnect', () => {
//         connectedClients.forEach((value, key) => {
//             if (value === socket.id) connectedClients.delete(key);
//         });
//         console.log('Client disconnected:', socket.id);
//     });
// });

// // Fuction to send notification to a user if they are connected
// const sendNotification = (userId, notification) => {
//     const socketId = connectedClients.get(userId.toString());

//     if (socketId) {
//         io.to(socketId).emit('notification', notification);
//     }
// };


// Endpoint to trigger a new notification
export const addNotification = async (req, res, next) => {
    try {
        const { userId, content, type } = req.body;

        const newNotification = await NotificationModel.create({ userId, content, type });

        sendNotification(userId, newNotification);

        res.status(201).json(newNotification);
    } catch (error) {
        next(error);
    }
};

export const updateNotification = async (req, res, next) => {
    const { id } = req.body;
    try {
        await NotificationModel.findByIdAndUpdate(id, { status: 'read' });

        res.status(200).json({ message: 'Notification marked as read' });
    } catch (error) {
        next(error);
    }
};

// REST API for fetching notifications
export const getNotification = async (req, res, next) => {
    try {
        const notifications = await NotificationModel.find({ userId: req.params.userId }).sort({ timestamp: -1 });

        res.status(200).json(notifications);
    } catch (error) {
        next(error);
    }
};



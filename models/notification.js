import { toJSON } from "@reis/mongoose-to-json";
import { Schema, Types, model } from "mongoose";

const notificationSchema = new Schema({
    userId: {type: Types.ObjectId, required: true, ref: 'user'},

    content: {type: String, required: true},

    type: {
        type: String,
        enum: ['info', 'warning', 'alert'],
        default: 'info'
    },

    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread'
    }
    
}, {
    timestamps: true
});

notificationSchema.plugin(toJSON);

export const NotificationModel = model('Notification', notificationSchema);
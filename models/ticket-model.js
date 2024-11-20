import { toJSON } from "@reis/mongoose-to-json";
import { Schema,Types,model } from "mongoose";

const ticketSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['open','in progress','resolved'],
        default:'open'
    },
    priority:{
        type:String,
        retuired:true,
        enum:['low','medium','high'],
        default:'low'
    },
    user:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamp:true})

ticketSchema.plugin(toJSON)

export const ticketModel =model('Ticket',ticketSchema)
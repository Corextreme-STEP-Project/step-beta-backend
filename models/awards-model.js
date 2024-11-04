import mongoose, { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const awardSchema = new Schema({
    tender_id: {type: Types.ObjectId, ref:'Tender',required:true },
    awardedBidderId: {type: Types.ObjectId, ref:'Submission', required:true},
    award_amount: {type: Number}
},{
    timestamps: true
})

awardSchema.plugin(toJSON)

export const  awardModel = model('award', awardSchema)
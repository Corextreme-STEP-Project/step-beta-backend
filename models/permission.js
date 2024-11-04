// B6 is working here
import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const permissionSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    }
})

permissionSchema.plugin(toJSON)

export const permissionModel = model('Permission', permissionSchema)
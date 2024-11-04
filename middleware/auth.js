import { expressjwt } from "express-jwt";
import { UserModel } from "../models/user.js";
import { permissions } from "../utils/rbac.js";


// Middleware to check if the user is authenticated
export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["HS256"],
    requestProperty: 'auth' // Attaches the decoded token to req.auth
});

export const hasPermission = (action) => {
    return async (req,res, next) => {
try {
    // find user from database
    const user = await UserModel.findById(req.auth.id) 
    // use the user role to find their permission
    const permission = permissions.find(value => value.role === user.role);
    if (!permission){
        return res.status(403).json('No permission found')
    }
    // check if permission actions include action
    if (permission.actions.includes(action)){
        next();
    } else{
        res.status(403).json('Action not allowed')
    }
} catch (error) {
    next(error)
    
}
    }
}


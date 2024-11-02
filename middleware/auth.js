import { expressjwt } from "express-jwt";
import { UserModel } from "../models/user.js";


// Middleware to check if the user is authenticated
export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["HS256"],
    requestProperty: 'auth' // Attaches the decoded token to req.auth
});
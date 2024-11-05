// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe

import { Router } from "express";
import { updateUser, deletedUser, getUserProfile, registerUser, loginUser } from "../controllers/userController.js";
import { isAuthenticated, hasPermission } from "../middleware/auth.js";
const userRouter = Router();

userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_user_profile'), getUserProfile);

userRouter.patch('/users/:id', updateUser);

userRouter.delete('/users/:id', deletedUser);

export default userRouter

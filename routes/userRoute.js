// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe

import { Router } from "express";
import { updateUser,deletedUser,  registerUser, loginUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/users/register',registerUser);

userRouter.post('/users/login',loginUser);

userRouter.patch('/users/:id',updateUser);

userRouter.delete('/users/:id',deletedUser);

export default userRouter

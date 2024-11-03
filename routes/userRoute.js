// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe

import { Router } from "express";
import { updateUser,deletedUser, fullUserUpdate } from "../controllers/userController.js";

const userRouter = Router();


userRouter.patch('/users/:id',updateUser);

userRouter.delete('/users/:id',deletedUser);

userRouter.put('/users/:id',fullUserUpdate)

export default userRouter

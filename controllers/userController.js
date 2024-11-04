// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe

import { userModel } from "../models/user-models.js"
import { updateUserValidate } from "../validators/profile-validator.js";

export const registerUser = async (req, res) => {
    
    const { name, email, password } = req.body;
    const user = await userModel.create({ name, email, password });
    res.json({ user, message: "User registered successfully" });
};  

// Controller for user login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json({ message: "User logged in successfully" });
};

// Partial Update user
export const updateUser = async (req, res, next) => {
    try {
        const {error,value}=updateUserValidate.validate(req.body)
        if (error) {
           return req.status(422).json(error) 
        }
        const {id} = req.params
        const user = await userModel.findByIdAndUpdate(id, req.body, { new: true })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

// Full Update user
// export const fullUserUpdate = async (req, res, next) => {
//     try {
//         const id = req.params.id
//         const user = await userModel.findByIdAndUpdate(id, req.body, { new: true, overwrite: ture })
//         if (!user) {
//             return res.status(404).json({ message: "User not found" })
//         }
//         res.status(200).json(user)
//     } catch (error) {
//         next(error)
//     }
// }


// Soft Delete user
export const deletedUser = (req, res, next) => {
    try {
        const { id } = req.params
        const user = userModel.findByIdAndUpdate(id,{deleted:true,deletedAt: new Date()},{new: true});
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({
            message:"user deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}
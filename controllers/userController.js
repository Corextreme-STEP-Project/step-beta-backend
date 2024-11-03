// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe

import { userModel } from "../models/user-models.js"


// Partial Update user
export const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id
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
export const fullUserUpdate = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userModel.findByIdAndUpdate(id, req.body, { new: true, overwrite: ture })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


// Soft Delete user
export const deletedUser = (req, res, next) => {
    try {
        const { id } = req.params
        const user = userModel.findByIdAndUpdate(id,{deleted:true},{new: true});
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
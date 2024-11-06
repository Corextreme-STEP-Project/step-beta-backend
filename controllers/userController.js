// Team: Firdaus Suhuyini Fuseini & Philip Quaicoe
import { registerUserValidator, loginUserValidator, updateUserValidator } from "../validators/user-validator.js";
import { UserModel } from "../models/user-models.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res, next) => {

    try {
        // Validate user input
        const { error, value } = registerUserValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email: value.email })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" })
        }
        // Hash password
        const hashedPassword = bcrypt.hashSync(value.password, 10)
        // Create new user
        const user = await UserModel.create({ ...value, password: hashedPassword })
        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        next(error)
    }
};

// Controller for user login
export const loginUser = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = loginUserValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        // Check if user exists
        const user = await UserModel.findOne({ email: value.email })
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" })
        }
        // Check if password is valid
        const isPasswordValid = bcrypt.compareSync(value.password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" })
        }
        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1h" })
        res.status(200).json({ message: "Login successful", token })
        
    } catch (error) {
        next(error)
    }
};

// Get user profile
export const getUserProfile = async (req, res, next) => {
    try {
        // Find authenticated user
        const user = await UserModel
        .findById(req.auth.id)
        .select({password: false});
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

// Partial Update user
export const updateUser = async (req, res, next) => {
    try {
        const { error, value } = updateUserValidator.validate(req.body)
        if (error) {
            return req.status(422).json(error)
        }
        const { id } = req.params
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
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
        const user = UserModel.findByIdAndUpdate(id, { deleted: true, deletedAt: new Date() }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({
            message: "user deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}
import { ticketModel } from "../models/ticket-model.js";
import { addticketvalidator } from "../validators/ticket-validator.js";

export const addticket = async (req, res, next) => {
    try {
        console.log(req.body)
        const { error, value } = addticketvalidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const ticket = await ticketModel.create({
             user: req.auth.id,
              ...value })
        res.status(201).json({
            message: "Ticket created successfully", ticket
        })
    } catch (error) {
        next(error)
    }
}
export const getticket = async (req, res, next) => {
    try {
        const tickets =  await ticketModel.find()
        if (!tickets || tickets.length === 0) {
            return res.status(404).json("No ticket found")
        }
        res.status(200).json(tickets)
    } catch (error) {
        next(error)
    }
}

export const getticketbyid = async (req, res, next) => {
    try {
        const { id } = req.params
        const ticket = await ticketModel.findById(id)
        if (!ticket) {
            return res.status(404).json("No ticket found")
        }
        res.status(200).json(ticket)
    } catch (error) {
        next(error)
    }
}

export const deleteticket = async (req, res, next) => {
    try {
        const { id } = req.params
        const ticket = await ticketModel.findByIdAndDelete(id)
        if (!ticket) {
            return res.status(404).json("No ticket found")
        }
        res.status(200).json("Ticket deleted successfully")
    } catch (error) {
        next(error)
    }
}

export const updatedticket = async (req, res, next) => {
    try {
        const { id } = req.params
        const { status } = req.body
        console.log(status)
        const ticket = await ticketModel.findByIdAndUpdate(id, {status}, { new: true })
        if (!ticket) {
            return res.status(404).json("No ticket found")
        }
        res.status(200).json({ message: 'Ticket updated successfully', ticket})
    } catch (error) {
        next(error)
    }
}
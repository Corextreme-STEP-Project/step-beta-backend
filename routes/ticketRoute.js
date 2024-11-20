import { Router } from "express";
import { addticket, deleteticket, getticket, getticketbyid, updatedticket } from "../controllers/ticketController.js";
import { isAuthenticated } from "../middleware/auth.js";

const ticketRoute = Router()

ticketRoute.post('/tickets',isAuthenticated,addticket)

ticketRoute.get('/tickets',isAuthenticated,getticket);

ticketRoute.get('/tickets/:id',isAuthenticated,getticketbyid);

ticketRoute.patch('/tickets/:id',isAuthenticated,updatedticket);

ticketRoute.delete('/tickets/:id',deleteticket)





export default ticketRoute
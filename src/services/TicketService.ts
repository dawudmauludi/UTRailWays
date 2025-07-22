import api from "../api/api";
import type { Ticket } from "../types/TicketTypes";

export const getAllTickets = async (): Promise<Ticket[]> => {
    const response = await api.get('/Ticket')
    return response.data.data;
}
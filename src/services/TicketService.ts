import api from "../api/api";
import type { Ticket } from "../types/TicketTypes";

export const getAllTickets = async (): Promise<Ticket[]> => {
    const response = await api.get('/Ticket')
    return response.data.data;
}
export const getTicketById = async (id: number): Promise<Ticket | null> => {
    try {
    const response = await api.get(`/Ticket/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil detail tiket:", error);
    return null;
  }
}
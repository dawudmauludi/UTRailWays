import type { Stasiun } from "../types/StasiunTypes";
import api from "../api/api";

const BASE_URL = "/Stasiun";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const fetchStasiun = async (): Promise<Stasiun[]> => {
  const res = await api.get(BASE_URL); 
  return res.data.data;
};

export const addStasiun = async (data: Omit<Stasiun, "id">): Promise<Stasiun> => {
  const res = await api.post(BASE_URL, data, getAuthHeader());
  return res.data.data;
};

export const updateStasiun = async (
  id: number,
  data: Omit<Stasiun, "id">
): Promise<Stasiun> => {
  const res = await api.put(`${BASE_URL}/${id}`, data, getAuthHeader());
  return res.data.data;
};

export const deleteStasiun = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`, getAuthHeader());
};

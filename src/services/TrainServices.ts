import api from "../api/api";
import type { Train } from "../types/TrainTypes";

const BASE_URL = "/Train";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const fetchTrain = async (): Promise<Train[]> => {
  const res = await api.get(BASE_URL);
  return res.data.data;
};

export const addTrain = async (data: Omit<Train, "id">): Promise<Train> => {
  const res = await api.post(BASE_URL, data, getAuthHeader());
  return res.data.data;
};

export const updateTrain = async (id: number, data: Omit<Train, "id">): Promise<Train> => {
  const res = await api.put(`${BASE_URL}/${id}`, data, getAuthHeader());
  return res.data.data;
};

export const deleteTrain = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`, getAuthHeader());
};

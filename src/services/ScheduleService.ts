import api from "../api/api";
import type { Schedule } from "../types/ScheduleTypes";

const BASE_URL = "/Schedule";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


export const fetchSchedule = async (): Promise<Schedule[]> => {
  const res = await api.get(BASE_URL);
  return res.data.data;
};

export const addSchedule = async (data: Omit<Schedule, "id">): Promise<Schedule> => {
  const res = await api.post(BASE_URL, data, getAuthHeader());
  return res.data.data;
};

export const updateSchedule = async (id: number, data: Omit<Schedule, "id">): Promise<Schedule> => {
  const res = await api.put(`${BASE_URL}/${id}`, data, getAuthHeader());
  return res.data.data;
};

export const deleteSchedule = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`, getAuthHeader());
};

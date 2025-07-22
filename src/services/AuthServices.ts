import api from "../api/api";
import type { LoginPayload } from "../types/AuthTypes";

export const loginJwt =  async (data: LoginPayload) => {
    const response = await api.post("/Auth/Login", data)
    return response.data;
}
export const cekRole =  async () => {
    const token = localStorage.getItem("token");

  const response = await api.get("/Auth/Me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}


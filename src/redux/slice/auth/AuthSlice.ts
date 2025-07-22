import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../../types/AuthTypes";

const initialState: AuthState = {
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    isAuthenticated: !!localStorage.getItem("token")
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; role: string }>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
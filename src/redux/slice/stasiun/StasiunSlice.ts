import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Stasiun } from "../../../types/StasiunTypes";
import * as api from "../../../services/StasiunService"

export const getStasiun = createAsyncThunk("stasiun/get", api.fetchStasiun);
export const createStasiun = createAsyncThunk("stasiun/create", api.addStasiun);
export const editStasiun = createAsyncThunk("stasiun/update", async ({ id, data }: { id: number; data: Omit<Stasiun, "id"> }) => {
  return await api.updateStasiun(id, data);
});
export const removeStasiun = createAsyncThunk("stasiun/delete", api.deleteStasiun);

type StasiunState = {
  data: Stasiun[];
  loading: boolean;
};

const initialState: StasiunState = {
  data: [],
  loading: false,
};

const stasiunSlice = createSlice({
  name: "stasiun",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStasiun.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStasiun.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createStasiun.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editStasiun.fulfilled, (state, action) => {
        const index = state.data.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(removeStasiun.fulfilled, (state, action) => {
        state.data = state.data.filter((s) => s.id !== action.meta.arg);
      });
  },
});

export default stasiunSlice.reducer;

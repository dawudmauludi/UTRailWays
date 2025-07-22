import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Schedule } from "../../../types/ScheduleTypes";
import * as api from "../../../services/ScheduleService";

export const getSchedule = createAsyncThunk("schedule/get", api.fetchSchedule);
export const createSchedule = createAsyncThunk("schedule/create", api.addSchedule);
export const editSchedule = createAsyncThunk("schedule/update", async ({ id, data }: { id: number; data: Omit<Schedule, "id"> }) => {
  return await api.updateSchedule(id, data);
});
export const removeSchedule = createAsyncThunk("schedule/delete", api.deleteSchedule);

type ScheduleState = {
  data: Schedule[];
  loading: boolean;
};

const initialState: ScheduleState = {
  data: [],
  loading: false,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editSchedule.fulfilled, (state, action) => {
        const index = state.data.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(removeSchedule.fulfilled, (state, action) => {
        state.data = state.data.filter((s) => s.id !== action.meta.arg);
      });
  },
});

export default scheduleSlice.reducer;

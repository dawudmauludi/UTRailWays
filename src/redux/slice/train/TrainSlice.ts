// redux/slice/train/TrainSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../services/TrainServices";
import type { Train } from "../../../types/TrainTypes";

export const getTrain = createAsyncThunk("train/get", api.fetchTrain);
export const createTrain = createAsyncThunk("train/create", api.addTrain);
export const editTrain = createAsyncThunk("train/update", async ({ id, data }: { id: number; data: Omit<Train, "id"> }) => {
  return await api.updateTrain(id, data);
});
export const removeTrain = createAsyncThunk("train/delete", api.deleteTrain);

type TrainState = {
  data: Train[];
  loading: boolean;
};

const initialState: TrainState = {
  data: [],
  loading: false,
};

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrain.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrain.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createTrain.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editTrain.fulfilled, (state, action) => {
        const index = state.data.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(removeTrain.fulfilled, (state, action) => {
        state.data = state.data.filter((t) => t.id !== action.meta.arg);
      });
  },
});

export default trainSlice.reducer;

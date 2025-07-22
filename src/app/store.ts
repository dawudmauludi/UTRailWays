// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/auth/AuthSlice";
import stasiunReducer from "../redux/slice/stasiun/StasiunSlice"
import trainnReducer from "../redux/slice/train/TrainSlice"
import scheduleReducer from "../redux/slice/schedule/ScheduleSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stasiun : stasiunReducer,
    train :trainnReducer,
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cart/cartSlice";
import authReducer from "../redux/slice/auth/AuthSlice";
import stasiunReducer from "../redux/slice/stasiun/StasiunSlice"
import trainnReducer from "../redux/slice/train/TrainSlice"
import scheduleReducer from "../redux/slice/schedule/ScheduleSlice"
import { loadCart, saveCart } from "../utils/LocalStorage";
import transactionReducer from "../redux/slice/transaction/transactionSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    stasiun : stasiunReducer,
    train :trainnReducer,
    schedule: scheduleReducer,
    cart: cartReducer,
     transaction: transactionReducer,
  },
  preloadedState: {
    cart: {
      items: loadCart() || [], // Ambil dari localStorage jika ada
    },
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveCart(state.cart.items); // Simpan ke localStorage setiap ada perubahan
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

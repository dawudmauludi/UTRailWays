import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../../../types/TicketTypes";

interface CartState{
    items: Ticket[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Ticket>) => {
      state.items.push(action.payload);
        },
         removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },

    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
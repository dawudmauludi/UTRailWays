import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface DetailTransaksi {
  tiketId: number;
  jumlah: number;
}

interface TransactionState {
  detailTransaksis: DetailTransaksi[];
}

const initialState: TransactionState = {
  detailTransaksis: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setDetailTransaksis: (state, action: PayloadAction<DetailTransaksi[]>) => {
      state.detailTransaksis = action.payload;
    },
    addToTransaction: (state, action) => {
  const { tiketId, jumlah } = action.payload;
  const existing = state.detailTransaksis.find((item) => item.tiketId === tiketId);
  if (existing) {
    existing.jumlah += jumlah;
  } else {
    state.detailTransaksis.push({ tiketId, jumlah });
  }
}
  },
});

export const { setDetailTransaksis, addToTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

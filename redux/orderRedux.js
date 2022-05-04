import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    invoice: "",
  },
  reducers: {
    setInvoice: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

export const { setInvoice } = orderSlice.actions;
export default orderSlice.reducer;

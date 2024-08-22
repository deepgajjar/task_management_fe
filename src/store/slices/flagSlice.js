import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createNewTicketModalFlag: false,
};

export const flagSlice = createSlice({
  name: "flags",
  initialState,
  reducers: {
    setCreateNewTicketModalFalg: (state, action) => {
      state.createNewTicketModalFlag = action.payload;
    },
  },
});

export const { setCreateNewTicketModalFalg } = flagSlice.actions;

export default flagSlice.reducer;

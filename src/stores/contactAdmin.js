import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDialog: false,
};

export const contactAdminSlice = createSlice({
  name: "contactAdmin",
  initialState,
  reducers: {
    setOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.openDialog = !state.openDialog;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpen } = contactAdminSlice.actions;

export default contactAdminSlice.reducer;

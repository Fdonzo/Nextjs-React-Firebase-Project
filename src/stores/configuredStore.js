import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signup";
import infoPageStateReducer from "./infoPageState";
import contactAdminReducer from "./contactAdmin";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    infoPageState: infoPageStateReducer,
    contactAdminDialog: contactAdminReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

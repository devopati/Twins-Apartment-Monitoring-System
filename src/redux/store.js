import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import DeviceSlice from "./slices/DeviceSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    device: DeviceSlice,
  },
});

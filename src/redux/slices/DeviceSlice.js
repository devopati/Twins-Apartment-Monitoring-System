import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKENDURL } from "../../constants/BackendUrl";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isAdded: false,
  devices: [],
  errMessage: "",
  successMsg: "",
};

export const AddNewDevice = createAsyncThunk(
  "device/add",
  async (data, thunkAPI) => {
    try {
      const { device, userId } = data;
      const response = await axios.post(
        `${BACKENDURL}/device/add/${userId}`,
        device
      );

      return response;
    } catch (error) {
      console.log(error);
      let errMsg;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errMsg = error.response.data.message;
      } else {
        // If no custom message, use a generic error message
        errMsg = "An error occurred while adding new device";
      }
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const GetAllDevices = createAsyncThunk(
  "device/get",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${BACKENDURL}/device/get/${userId}`);

      return response;
    } catch (error) {
      console.log(error);
      let errMsg;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errMsg = error.response.data.message;
      } else {
        // If no custom message, use a generic error message
        errMsg = "An error occurred while getting your devices";
      }
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const DeviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setIsAdded: (state, action) => {
      state.isAdded = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // Add new device
      .addCase(AddNewDevice.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(AddNewDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(action.payload.data?.message);
        state.isAdded = true;
      })

      .addCase(AddNewDevice.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
        state.errMessage = action.payload;
      })

      // Get all devices
      .addCase(GetAllDevices.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(GetAllDevices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.devices = action.payload.data?.devices;
      })

      .addCase(GetAllDevices.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
        state.errMessage = action.payload;
      });
  },
});

export const { setIsAdded } = DeviceSlice.actions;

export default DeviceSlice.reducer;

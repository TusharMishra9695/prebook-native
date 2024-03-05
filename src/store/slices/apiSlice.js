import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPI } from "../../utils/apiCalls";

export const fetchData = createAsyncThunk("fetchData", async (token) => {
  try {
    const response = await getAPI("/products", token);
    if (response.success) {
      return response;
    } else {
      console.log(response.message, "message");
    }
  } catch (e) {
    console.log("some error in redux api call");
  }
});

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (token) => {
    try {
      const response = await getAPI("/user-detail", token);
      if (response.success) {
        return response;
      } else {
        console.log(response.message, "message");
      }
    } catch (e) {
      console.log("some error in redux api call");
    }
  }
);
export const fetchFaqData = createAsyncThunk("fetchFaqData", async (token) => {
  try {
    const response = await getAPI("/faq", token);
    if (response.success) {
      return response;
    } else {
      console.log(response.message, "message");
    }
  } catch (e) {
    console.log("some error in redux api call");
  }
});
const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    data: null,
    faq: null,
    userdata: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchFaqData.fulfilled, (state, action) => {
      state.faq = action.payload;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userdata = action.payload;
    });
  },
});

export default apiSlice.reducer;

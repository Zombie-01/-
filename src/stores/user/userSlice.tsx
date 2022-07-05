import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    login: (state, action) => {
      console.log("redux", action.payload);
    },
 
  },
});

export const { login } = counterSlice.actions;

export default counterSlice.reducer;
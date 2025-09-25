import { createSlice } from "@reduxjs/toolkit";
import { busIndex } from "../thunks/busThunk";

const busSlice = createSlice({
  name: 'busSlice',
  initialState: {
    busList: [],
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(busIndex.fulfilled, (state, action) => {
        state.busList = action.payload
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('에러에러.', action.error);
        } 
      );
  }
})

export default busSlice.reducer;
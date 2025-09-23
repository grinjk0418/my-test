import { createSlice } from "@reduxjs/toolkit";
import { busStopListIndex } from "../thunks/busStopListThunk";

const busStopListSlice =createSlice({
  name: 'busStopListSlice',
  initialState: {
    list: [],
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(busStopListIndex.fulfilled, (state, action) => {
        state.list = action.payload.items.bs;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('에러에러.', action.error);
        } 
      );
  }
});

export default busStopListSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import busStopListReducer from './slices/busStopListSlice.js'

export default configureStore({
  reducer: {
    busStopList: busStopListReducer,
  }
});
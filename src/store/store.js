import { configureStore } from "@reduxjs/toolkit";
import busReducer from './slices/busSlice';


export default configureStore({
    reducer:{
        bus: busReducer,
    }
})
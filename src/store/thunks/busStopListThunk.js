import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosConfig from "../../configs/axiosConfig.js";

const busStopListIndex = createAsyncThunk(
  'busStopListSlice/busStopListIndex',
  async () => {
    const url = `${axiosConfig.BASE_URL}/getBasic02`;
    const params = {
      serviceKey: axiosConfig.SERVICE_KEY
    }
    const response = await axios.get(url, {params});

    return response.data.body;
  }
);

export {
  busStopListIndex
};
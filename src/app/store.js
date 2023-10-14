import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/home/reducers/postSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

export default store;

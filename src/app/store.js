import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/home/reducers/postSlice";
import userSlice from "../features/profile/reducers/userSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
});

export default store;

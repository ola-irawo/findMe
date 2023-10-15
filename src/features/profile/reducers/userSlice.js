import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { collection, db, addDoc } from "../../index";
// import { addDoc } from "firebase/firestore";

const userAdapter = createEntityAdapter({});

const initialState = userAdapter.getInitialState({
  status: "idle",
  error: null,
});

const userRef = collection(db, "users");
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  await addDoc(userRef, user);
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  //   extraReducers: (build) => {
  //     build;
  //   },
});

export default userSlice.reducer;

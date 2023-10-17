import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { collection, db, addDoc, onSnapshot, getDocs } from "../../index";
// import { addDoc } from "firebase/firestore";

const userAdapter = createEntityAdapter({});

const initialState = userAdapter.getInitialState({
  status: "idle",
  error: null,
  currentUser: [],
  userId: "",
  hankoUid: "",
});

const userRef = collection(db, "users");

// export const addHankoUid = createAsyncThunk

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  await addDoc(userRef, user);
});

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const usersDoc = await getDocs(userRef);
  const users = usersDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return users;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getCurrentUser: {
      reducer: (state, action) => {
        state.currentUser = action.payload.user;
      },
      prepare(user) {
        return {
          payload: {
            user,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        userAdapter.upsertMany(state, action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload.error;
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
} = userAdapter.getSelectors((state) => state.users);

export const { getCurrentUser } = userSlice.actions;
export const user = (state) => state.users.currentUser;
export default userSlice.reducer;

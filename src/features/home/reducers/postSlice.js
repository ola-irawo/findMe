import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const postAdapter = createEntityAdapter({});

const initialState = postAdapter.getInitialState({
  status: "idle",
  error: null,
  count: 0,
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateCount: {
      reducer: (state, action) => {
        state.count = state.count + action.payload.num;
      },
      prepare(num) {
        return {
          payload: {
            num,
          },
        };
      },
    },
  },
});

export const { updateCount } = postSlice.actions;
export const getPost = (state) => state.posts.count;
export default postSlice.reducer;

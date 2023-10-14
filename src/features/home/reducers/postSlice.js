import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = createEntityAdapter({
  status: "pending",
  error: null,
  count: 0,
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateCount: {
      reducer: (state, action) => {
        state.count = state.count + action.payload + 1;
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
export default postSlice.reducer;

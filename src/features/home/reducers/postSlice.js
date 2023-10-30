import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  db,
  collection,
  onSnapshot,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "../../index";
import { addDoc } from "firebase/firestore";

const postAdapter = createEntityAdapter({});

const initialState = postAdapter.getInitialState({
  status: "idle",
  error: null,
  count: 0,
  showModal: false,
  windowWidth: window.innerWidth,
});

const postRef = collection(db, "posts");

export const addPost = createAsyncThunk("posts/addPost", async (i) => {
  await addDoc(postRef, i);
});

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const querySnapshot = await getDocs(postRef);
  const posts = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return posts;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const postToDelete = doc(db, "posts", postId);
    const deletedPost = deleteDoc(postToDelete);
    return deletedPost;
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const postToUpdate = doc(db, "posts", post.id);
  const updatePost = updateDoc(postToUpdate, post);
  return updatePost;
});

// export const postLike = createAsyncThunk("posts/postLike", async (post) => {
//   const postToLike = doc(db, "posts", { post });
//   set;
// });

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
    changePostModal: {
      reducer: (state, action) => {
        state.showModal = action.payload.value;
      },
      prepare(value) {
        return {
          payload: {
            value,
          },
        };
      },
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        postAdapter.upsertMany(state, action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload.error;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        postAdapter.removeOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        postAdapter.updateOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postAdapter.getSelectors((state) => state.posts);

export const { updateCount, changePostModal, setWindowWidth } =
  postSlice.actions;
export const getPost = (state) => state.posts.count;
export const getWindowWidth = (state) => state.posts.windowWidth;
export const getPostModal = (state) => state.posts.showModal;
export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage, db } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { UserState } from "../user/userSlice";

type Post = {
  id: string;
  content: string;
  mediaUrl?: string;
  timestamp: string;
  user: UserState["user"];
};

type PostPayload = {
  content: string;
  file?: File | null;
  user: UserState["user"];
  timestamp: string;
};

type PostState = {
  posts: Post[];
  status: string;
  error?: null | string;
  loading: boolean;
};
const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
  loading: false,
};

export const postArticle = createAsyncThunk(
  "articles/postArticle",

  async (payload: PostPayload, { rejectWithValue }) => {
    try {
      let fileUrl = "";

      if (payload.file) {
        const fileRef = ref(storage, `/uploads/${payload.file.name}`);
        await uploadBytes(fileRef, payload.file);
        fileUrl = await getDownloadURL(fileRef);
      }

      const newPost: Post = {
        id: "",
        content: payload.content,
        mediaUrl: fileUrl,
        timestamp: payload.timestamp,
        user: payload.user,
      };

      const postsCollectionRef = collection(db, "posts");
      const docRef = await addDoc(postsCollectionRef, newPost);

      newPost.id = docRef.id;

      return newPost;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(postArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;

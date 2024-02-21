import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { UserState } from "../user/userSlice";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Article {
  id: string;
  content: string;
  mediaUrl?: string;
  timestamp: string;
  user: UserState["user"];
}

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    const articles: Article[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const article: Article = {
        id: doc.id,
        content: data.content,
        mediaUrl: data.mediaUrl,
        timestamp: data.timestamp,
        user: data.user,
      };
      articles.push(article);
    });
    return articles;
  }
);

interface FetchArticlesState {
  articles: Article[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FetchArticlesState = {
  articles: [],
  status: "idle",
  error: null,
};

const fetchArticlesSlice = createSlice({
  name: "fetchArticles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default fetchArticlesSlice.reducer;

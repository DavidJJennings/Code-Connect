import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { useDispatch } from "react-redux";
import articlesReducer from "./articles/articlesSlice";
import fetchArticlesReducer from "./articles/fetchArticleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
    fetchArticles: fetchArticlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

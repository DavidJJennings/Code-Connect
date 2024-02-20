import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { AppDispatch } from "../store";

export type UserState = {
  user: null | {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;
  };
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<UserState["isLoading"]>) => {
      state.isLoading = action.payload;
    },
  },
});

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await auth.signOut();
    dispatch(logOutUser());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const { logInUser, logOutUser, setLoading } = userSlice.actions;
export default userSlice.reducer;

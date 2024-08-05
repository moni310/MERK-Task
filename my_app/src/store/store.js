import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "../store/blogSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

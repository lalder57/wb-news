import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsReducer";

export default configureStore ({
  reducer: hackerNewsReducer
});
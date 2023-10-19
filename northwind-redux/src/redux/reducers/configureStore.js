import { configureStore as reduxConfigureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function configureStore() {
  return reduxConfigureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
}

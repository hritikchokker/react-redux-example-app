import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userFormReducer from "./features/userBasicForm";

export default configureStore({
  reducer: {
    counter: counterReducer,
    userForm: userFormReducer,
  },
});

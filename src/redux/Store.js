import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/Budget";

const store = configureStore({
  reducer: {
    usersState: usersSlice,
  },
});

export default store;

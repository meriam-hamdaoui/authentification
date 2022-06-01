import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

//create a store with reducer object : {reducerName : sliceName}
export default configureStore({
  reducer: {
    user: userSlice,
  },
});

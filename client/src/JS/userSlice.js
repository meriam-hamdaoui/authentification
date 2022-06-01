import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: uuidv4(),
      name: "hanen",
      email: "hanen@gmail.com",
      password: "123456",
    },
  ],
  reducers: {
    //add contact reducer
    signup: (state, action) => {
      const newUser = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newUser];
    },
    signin: (state, action) => {
      return action.payload;
    },
  },
});
export const { signup, signin } = userSlice.actions;
export default userSlice.reducer;

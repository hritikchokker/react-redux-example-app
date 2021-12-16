import {createSlice} from "@reduxjs/toolkit";

export const userFormSlice = createSlice({
  name: "userForm",
  initialState: {
    names: "",
    age: "",
    location: "",
  },
  reducers: {
    updateValue: (state, action) =>{
        state[action.payload.name] = action.payload.value;
    }
  },
});

export const {updateValue} = userFormSlice.actions;
export default userFormSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    uservalidator: false,
    error: false,
    success: false,
    loginGoogle: false,
    manualuser : false,
    socialuser : false,
  },
  reducers: {
   
    addUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.success = true;
      state.uservalidator = true;
      state.manualuser = true;
    },
    
    loginStart: (state) => {
      state.error = false;
      state.success = false;
      state.currentUser = [];
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.success = true;
      state.uservalidator = true;
       state.manualuser = true;
    },
    loginFailed: (state) => {
      state.error = false;
      state.success = false;
      state.uservalidator = false;
    },
    AddUserSocialSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.success = true;
      state.uservalidator = true;
      state.socialuser = true;
    },
    userLogout : (state)=>{
     state.currentUser = [];
     state.uservalidator = false;
     state.loginGoogle = false;
     state.socialuser = false;
     state.manualuser = false;
    },
    loginGoogleStart : (state)=>{
      state.loginGoogle = true;
    }
  },
});

export const {
  addUserSuccess,
  loginStart,
  loginSuccess,
  loginFailed,
  AddUserSocialStart,
  AddUserSocialSuccess,
  AddUserSocialFailed,
  userLogout,
  loginGoogleStart,
} = UserSlice.actions;

export default UserSlice.reducer;

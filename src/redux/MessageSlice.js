import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    messageSuccess: false,
    messageError: false,
    messageCount: 0,
  },
  reducers: {
    MessageStart: (state) => {
      state.messageSuccess = false;
      state.messageError = false;
    },
    MessageSuccess: (state, action) => {
      state.messages = action.payload;
      state.messageSuccess = true;
      state.messageError = false;
      state.messageCount = state.messages.length;
    },
    MessageFailed: (state) => {
      state.messageSuccess = false;
      state.messageError = true;
    },
    messageLogout: (state) => {
      state.messageCount = 0;
      state.messages = [];
    },
    MessageDeleteStart: (state) => {
      state.messageError = false;
    },
    MessageDeleteSuccess: (state, action) => {
      state.messages = state.messages.filter((items)=> items._id !== action.payload);
      state.messageError = false;
      
    },
    MessageDeleteFailed: (state) => {
      state.messageError = true;
    },
  },
});

export const {
  MessageStart,
  MessageSuccess,
  MessageFailed,
  messageLogout,
  MessageDeleteStart,
  MessageDeleteSuccess,
  MessageDeleteFailed,
} = MessageSlice.actions;
export default MessageSlice.reducer;

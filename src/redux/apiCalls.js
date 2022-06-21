import { publicRequest } from "../RequestMethod";
import {
  MessageSuccess,
  MessageStart,
  MessageFailed,
  messageLogout,
  MessageDeleteStart,
  MessageDeleteSuccess,
  MessageDeleteFailed,
} from "./MessageSlice";
import {
  loginFailed,
  loginSuccess,
  loginStart,
  userLogout,
} from "./UserSlice";

export const LoginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("user/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const UserLogout = async (dispatch) => {
  dispatch(userLogout());
};

export const MessageLogout = async (dispatch) =>{
    dispatch(messageLogout());
};


export const GetMessage = async (dispatch, receiverID) => {
  dispatch(MessageStart());
  try {
    const res = await publicRequest.get(`message/getMessage/${receiverID}`);
    dispatch(MessageSuccess(res.data));
  } catch (error) {
    dispatch(MessageFailed());
  }
};


export const DeleteMessage = async (dispatch, id)=>{
  dispatch(MessageDeleteStart());
  try{
    const res = await publicRequest.delete(`message/delete/${id}`);
    dispatch(MessageDeleteSuccess(id));
  }catch(err){
    dispatch(MessageDeleteFailed());
  }
}
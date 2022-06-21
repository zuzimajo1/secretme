
import React from 'react'
import { MessageSection, MessageMain, MessageSend, MessageSection2 } from "../Styles/Link.styled"
import { format } from "timeago.js";
import { DeleteMessage } from "../redux/apiCalls"
import { useDispatch } from "react-redux";



const LetterMeMessage = ({_id, message, createdAt }) => {
    const dispatch = useDispatch();

    const HandleMessageDelete = (id)=>{
        DeleteMessage(dispatch, id)
    }


    return (
        <MessageMain>
            <MessageSection>
                <MessageSend>{message}</MessageSend>
            </MessageSection>
            <MessageSection2>
            <p>{format(createdAt)}</p>
            <p onClick={()=>HandleMessageDelete(_id)}>Delete</p>
            </MessageSection2>
        </MessageMain>
    )
}

export default LetterMeMessage
import React, { useState, useEffect, useRef } from 'react'
import { LinkContainer, LinkSection, ButtonCopy, LinkWrapper, LinkWrapper2, MessageContainer, NewMessageNotification, Notification, NoMessageSection, AuthorSection  } from '../Styles/Link.styled'
import { AiOutlineCopy } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { GetMessage } from "../redux/apiCalls";
import LetterMeMessage from './LetterMeMessage';
import SimpleBar from 'simplebar-react';




const Link = () => {
    const dispatch = useDispatch();
    const [ButtonClick, setButtonClick] = useState(false);
    const receiverID = useSelector(state => state.user.currentUser._id);
    const User = useSelector(state => state.user.currentUser.uservalidator);
    // const userID = useSelector(state => state.user.currentUser?.userID);
    const messages = useSelector(state => state.messages.messages);
    const messageCount = useSelector(state => state.messages.messageCount);
    const mesageSuccess = useSelector(state => state.messages.messageSuccess);
    const [MessageCount, setMessageCount] = useState(0);
    const [Refresh, setRefresh] = useState(false);
    const scrollableNodeRef = useRef(null);
    const [MessageEnter, setMessageEnter] = useState(false);

    const HandleCopyClick = () => {
        navigator.clipboard.writeText(`https://secretme.onrender.com/SendMessage?userID=${receiverID}`);
        setButtonClick(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setButtonClick(false);
        }, 2000);
        return () => clearInterval(interval);
    }, [ButtonClick]);


    useEffect(() => {
        GetMessage(dispatch, receiverID);
        setRefresh(false);
    }, [dispatch, Refresh])



    useEffect(() => {
        const intervalRefresh = setInterval(() => {
            setRefresh(true);
        }, 5000)
        return () => clearInterval(intervalRefresh);
    }, [Refresh])


    const HandleScroll = (e) => {
        e.preventDefault();
        scrollableNodeRef.current.scrollIntoView({ behavior: "smooth" });
        setMessageCount(messageCount);
        setMessageEnter(true);
    }


    useEffect(() => {
        setMessageCount(messageCount);
        setMessageEnter(false);
    }, [User]);


    return (
        <LinkContainer>
            <LinkSection >
                <LinkWrapper>
                    <h3>This is your generated SecretMe link, anyone can message you anonymously using this link</h3>
                    <div>
                        <input type="text" value={`https://secretme.onrender.com/SendMessage?userID=${receiverID}`} disabled >
                        </input>
                        <ButtonCopy colorcondition={ButtonClick && "gray"} conditon={ButtonClick} onClick={HandleCopyClick}>
                            <AiOutlineCopy />
                        </ButtonCopy>
                    </div>
                </LinkWrapper>
                <LinkWrapper2>
                    <h3>Messages</h3>
                    <MessageContainer >
                        <SimpleBar style={{ width: "100%", height:"100%" }} >
                            {messages.length > 0 ? (
                            messages && messages.map((items) => (
                                    <LetterMeMessage {...items} key={items._id}/>
                            ))):
                            (
                                <NoMessageSection>
                                    <h2>No Message</h2>
                                </NoMessageSection>
                            )}
                            <div ref={scrollableNodeRef}></div>
                        </SimpleBar>
                        {messageCount > 5 && (
                            <div>
                                {MessageEnter ?
                                    (<div>
                                        {messageCount > MessageCount && (<NewMessageNotification onClick={HandleScroll} >
                                            <Notification>
                                                {(messageCount) - (MessageCount)} New Messages!
                                            </Notification>
                                        </NewMessageNotification>)}
                                    </div>) :
                                    (<NewMessageNotification onClick={HandleScroll} >
                                        <Notification>
                                            Scroll down
                                        </Notification>
                                    </NewMessageNotification>)}
                            </div>
                        )}
                    </MessageContainer>
                </LinkWrapper2>
            <AuthorSection>
                <p>&copy; 2022 by Zuzim Ajo</p>
            </AuthorSection>
            </LinkSection>
        </LinkContainer>
    )
}

export default Link
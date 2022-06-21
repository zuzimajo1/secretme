import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../RequestMethod';
import Navbar from "../Components/Navbar";
import { LetterUserContainer, LetterRecipient, LetterUserWrapper,  ImageGif, IconWarn, InfoLetterMe } from "../Styles/LetterMeUser.styled";
import { AiFillInfoCircle,  AiFillWarning } from "react-icons/ai";
import { AuthorSection } from "../Styles/Link.styled";
import SendingGif from "../images/messageloading.gif";
import SentGif from "../images/check.gif";
import { useDispatch } from "react-redux";
import Loading from "../Components/Loading";


const LetterMeUser = () => {
    const location = useLocation();
    const userCode = location.search.split("=")[1];
    const [UserData, setUserData] = useState({});
    const [message, setmessage] = useState("")
    const [omit, setomit] = useState(false);
    const [MessageLoading, setMessageLoading] = useState(true);
    const [MessageLoading2, setMessageLoading2] = useState(false);
    const [MessageLoading3, setMessageLoading3] = useState(true);
    const [loading, setloading] = useState(true);
    const date = new Date();
    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await publicRequest.get(`user/findUser/${userCode}`);
                setUserData(res.data);
                setloading(false);
            } catch (error) { }
        }
        getUser();
    }, [dispatch])

    const HandleSend = (e) => {
        e.preventDefault();

        const sendMessage = async () => {
            if (message) {
                setMessageLoading(false);
                setMessageLoading2(true);
                try {
                    const res = await publicRequest.post("message", {
                        userID: date.getTime() + date.getMinutes() + date.getSeconds(),
                        recipientID: userCode,
                        message: message,
                    });
                    setMessageLoading3(false);
                } catch (error) {

                }
            } else {
                setomit(true);
            }

        }
        sendMessage();
    }


    useEffect(() => {
        setTimeout(() => {
            setMessageLoading2(false);
            setMessageLoading3(true);
            setMessageLoading(true);
            setmessage("");
        }, 1500)
    }, [MessageLoading3])

    useEffect(() => {
        const interval = setTimeout(() => {
            setomit(false);
        }, 1000)
        return () => clearInterval(interval);
    }, [omit])

    if (loading) {
        return (
            <Loading />

        )
    }


    return (
        <>
            <Navbar />
            <LetterUserContainer>
                <LetterUserWrapper>
                    <h2>SEND MESSAGE TO</h2>
                    <LetterRecipient>
                        <img src={UserData.image || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt={UserData.firstname}></img>
                        <h3>{UserData.firstname}</h3>
                    </LetterRecipient>
                    <textarea type="text" value={message} onChange={(e) => setmessage(e.target.value)} >
                    </textarea>
                    {MessageLoading && (<button onClick={HandleSend}>
                        Send a Message
                    </button>)}
                    {MessageLoading2 && (<div>
                        {MessageLoading3 ? (<button>Sending<ImageGif src={SendingGif} alt="sendingGif"></ImageGif></button>) : (<button >Message Sent!<ImageGif src={SentGif} alt="sendingGif"></ImageGif></button>)}
                    </div>)}
                    {omit && (<IconWarn ><AiFillWarning color='red' />
                        <span>
                            Please input message
                        </span>
                    </IconWarn>)}
                    {/* <InfoLetterMe><AiFillInfoCircle color="#9F17C7 " />
                        <span>
                            Your sending a letter anonymously. Please login to have your own LetterMe Link
                        </span>
                    </InfoLetterMe> */}
                </LetterUserWrapper>
                <AuthorSection>
                    <p>&copy; 2022 by Zuzim Ajo</p>
                </AuthorSection>
            </LetterUserContainer>
        </>
    )
}

export default LetterMeUser
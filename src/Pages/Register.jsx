import React, { useState, useEffect } from 'react'
import { RegisterMain, RegisterSection, RegisterWrapper, RegisterWrapper2, RegisterDiv, RegisterImage, RegisterButton, RegisterImageWrapper } from "../Styles/Register.styled";
import { Title } from "../Styles/Login.styled"
import { GiPlainArrow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LoadingGif from "../images/messageloading.gif";
import CheckGif from "../images/messagecheck.gif";
import { ImageGif } from "../Styles/LetterMeUser.styled"
import { AiFillWarning } from "react-icons/ai";
import { IconWarn } from "../Styles/LetterMeUser.styled";
import { publicRequest } from "../RequestMethod";
import { addUserSuccess } from "../redux/UserSlice"


const Register = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [File, setFile] = useState(null);
    const [ImageValidator, setImageValidator] = useState(false);
    const [image, setImage] = useState("");
    const [ImageType, setImageType] = useState(false);
    const [Register, setRegister] = useState(true);
    const [Register2, setRegister2] = useState(false);
    const [Register3, setRegister3] = useState(true);
    const [omit, setomit] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [NotEqualPass , setNotEqualPass] = useState(false);
    


   

    const HandleImage = (e) => {
        e.preventDefault();

        if (!(e.target.files[0])) {
            setImageType(true);
            setImage(File.name)
        } else {
            if ((e.target.files[0].type === "image/jpeg") || (e.target.files[0].type === "image/png")) {
                setFile(e.target.files[0]);
                setImageValidator(true);
                setImageType(true);
            } else {
                setImage("Not an image type!");
                setImageType(false);
            }

        }
    }

    useEffect(() => {
      ImageType &&  setImage(File?.name);
    }, [ ImageType, File])



    const HandleButton = () => {
        if (ImageType && firstname && lastname && email && username && password && confirmPass ) {
                if (password === confirmPass) {
                
                setRegister(false);
                setRegister2(true);

                // Upload file and metadata to the object 'images/mountains.jpg'
                const storageRef = ref(storage, `files/${File?.name}`);
                const uploadTask = uploadBytesResumable(storageRef, File);
                
                uploadTask.on("state_changed", (snapshot) => {
                    const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                }, (error) => console.log(error),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            const inputs = { username, firstname, lastname, email, password , image: url, userID: new Date().getTime() + new Date().getMinutes() + new Date().getSeconds() };
                            // RegisterUser(dispatch, inputs);
                            const register = async () => {
                                try {
                                    const res = await publicRequest.post("user/register", inputs);
                                    setRegister3(false);
                                    dispatch(addUserSuccess(res.data));
                                } catch (err) {
                                }
                            }
                            register();
                        })
                    }
                )
                }else{
                    setNotEqualPass(true);
                }
            
        }else{
            setomit(true);

        }

    }

    useEffect(() => {
     const interval =    setInterval(() => {
            setomit(false);
            setNotEqualPass(false);
        }, 2000)

    return ()=> clearInterval(interval);
    }, [omit, NotEqualPass])

    return (
        <RegisterMain>
            <RegisterSection>
                <Title>Register</Title>
                <form autoComplete='off'>
                    <RegisterDiv>
                            <input type="text" name="firstname" onChange={(e)=> setFirstname(e.target.value)} placeholder='Firstname'></input>
                            <input type="text" name="lastname" onChange={(e)=> setLastname(e.target.value)} placeholder='Lastname'></input>
                            <input type="text" name="username" onChange={(e)=> setUsername(e.target.value)} placeholder='Username'></input>
                            <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder='Email'></input>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
                            <input type="password" onChange={(e) => setConfirmPass(e.target.value)} placeholder='Confirm Password'></input>
                    </RegisterDiv>
                    <RegisterImageWrapper>
                        <label htmlFor='profile'><p><GiPlainArrow /></p>{ImageValidator ? `${image}` : "Upload your Profile Picture"}</label>
                        <RegisterImage type="file" id="profile" onChange={HandleImage} ></RegisterImage>
                    </RegisterImageWrapper>
                    <RegisterButton>
                        {Register && (<button type='button' onClick={HandleButton}>Create</button>)}
                        {Register2 && (<div>
                        {Register3 ? (<button>Please Wait<ImageGif src={LoadingGif} alt="sendingGif"></ImageGif></button>) : (<button >Account Created<ImageGif src={CheckGif} alt="sendingGif"></ImageGif></button>)}
                        </div>)}
                        {omit && (<IconWarn ><AiFillWarning color='red' />
                            <span>
                                Please don't omit any details!
                            </span>
                        </IconWarn>)}
                        {NotEqualPass && (<IconWarn ><AiFillWarning color='red' />
                            <span>
                                Password is not Equal!
                            </span>
                        </IconWarn>)}
                    </RegisterButton>
                </form>
            </RegisterSection>
        </RegisterMain>
    )
}

export default Register
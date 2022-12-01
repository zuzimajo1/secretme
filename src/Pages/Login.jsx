import React,{useState} from 'react'
import { Main, Section, LoginForm, SocialLogin, FacebookButton, GoogleButton, Icon, Title } from '../Styles/Login.styled'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { LoginUser } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");

  const HandleButton = (e)=>{
    e.preventDefault();
    LoginUser(dispatch, {username, password});
  }

  const google = (e)=>{
    e.preventDefault();
    window.open("https://secretme.onrender.com/auth/google", "_self" )
  
  }


  const facebook = (e)=>{
    e.preventDefault();
    window.open("https://secretme.onrender.com/auth/facebook", "_self")
    
  }

  return (
    <Main>
      <Section>
        <div>
          <LoginForm autoComplete='off'>
            <Title>LOGIN</Title>
            <input placeholder='Username' onChange={(e) => Setusername(e.target.value)}  type="text"></input>
            <input placeholder='Password' onChange={(e) => Setpassword(e.target.value)}  type="password"></input>
            <button onClick={HandleButton} >Login</button>
            <div>
              <Link to="/register">
              <p>Dont have account.</p>
              </Link>
            </div>
          </LoginForm>
        </div>
        <span>or</span>
        <div>
          <SocialLogin>
            <FacebookButton onClick={facebook}>
              <Icon>
                <SiFacebook />
              </Icon>
              Continue with Facebook
            </FacebookButton>
            <GoogleButton onClick={google}>
              <Icon>
              <FcGoogle />
              </Icon>
              Continue with Google
            </GoogleButton>
          </SocialLogin>
        </div>
      </Section>
    </Main>
  )
}

export default Login
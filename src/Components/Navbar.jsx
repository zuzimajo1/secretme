import React from 'react'
import { NavbarStyle } from '../Styles/Navbar.styled'
import { useDispatch, useSelector } from 'react-redux';

import LoveLetter from "../images/heart-letter.png"
import { UserLogout, MessageLogout } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const firstname = useSelector(state => state.user.currentUser?.firstname);
  const lastname = useSelector(state => state.user.currentUser?.lastname);
  const userImg = useSelector(state => state.user.currentUser?.image);
  const manualUser = useSelector(state => state.user.manualuser);
  const socialUser = useSelector(state => state.user.socialuser);
  const userValidator = useSelector(state => state.user.uservalidator);

  const HandleLogout = (e) => {
    e.preventDefault();
    if (manualUser === true) {
      UserLogout(dispatch);
      MessageLogout(dispatch);
    } else if (socialUser === true) {
      window.open("https://secretmeph.herokuapp.com/auth/logout", "_self");
      UserLogout(dispatch);
    }
  }


  return (
    <NavbarStyle>
      <div>
        <img src={LoveLetter} alt="loveletter"></img>
        <h1>
          <Link to="/" >
            SecretMe.
          </Link>
        </h1>
      </div>
      {userValidator ? (<div>
        <img src={userImg || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="zuzim" ></img>
        <h3>{firstname}</h3>
        <button onClick={HandleLogout}>Logout</button>
      </div>) :
        (
          <div>
            <p>
              <Link to="/register">
                Register
              </Link>
            </p>
            <p>
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>
        )}
    </NavbarStyle>
  )
}

export default Navbar
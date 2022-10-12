import React, { useState, useEffect } from "react";

import { GlobalStyle } from "./Styles/Global.styled";
import { ThemeProvider } from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
// import {AddUserSocial} from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { AddUserSocialSuccess } from "./redux/UserSlice";
import LetterMeUser from "./Pages/LetterMeUser";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const theme = {
    colors: {
        white: "fff",
        violet: "rgb(94, 11, 102)",
    },
    responsive: {
        laptop: "1024px",
        tablet: "768px",
        tabletS: "640px",
        tabletXS: "550px",
        mobileL: "480px",
        mobileM: "400px",
        mobileS: "360px",
    },  
};

function App() {
    const User = useSelector((state) => state.user.uservalidator);
    const LoginGoogle = useSelector((state) => state.user.loginGoogle);
    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            fetch("https://secretmeph.herokuapp.com/auth/login/success", {
                //fetching the user information from the http url
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((res) => {
                    if (res.status === 200) return res.json(); //if the status is 200, return the response
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                  
                    dispatch(AddUserSocialSuccess(resObject.user));
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {User ? <Home /> : <Redirect to="/login" />}
                        </Route>
                        <Route path="/register">
                            {User ? <Redirect to="/" /> : <Register />}
                        </Route>
                        <Route path="/login">
                            {User ? <Redirect to="/" /> : <Login />}
                        </Route>
                        <Route path="/:SendMessage">
                            {User ? <LetterMeUser /> : <LetterMeUser />}
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;

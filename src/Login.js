import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import {auth,provider} from './firebase'

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInner>
                <img src="https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_1280.png" alt=""/>
                <h1>sign in to sleek Jos</h1>
                <p>Michina</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </LoginInner>
            

        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #ccc;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const LoginInner = styled.div`
padding:100px;
text-align: center;
background-color: #96185F;
border-radius:10px;
box-shadow: 0 1px 3px rgba(85, 252, 12, 0.12 ), 0 1px 2px rgba(85, 252, 12, 0.24 );
    >img{
        object-fit: contain; 
        height: 100px;
        margin-bottom:40px;
    }
    >h1{
        color: #fff;
    }
    >p{
        color: #fff;
    }
    >Button{
        background-color: #f8f8f8;
    }
    >Button:hover{
        background-color: transparent;
        color: #fff;

    }
`;
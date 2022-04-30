import React from 'react';
import styled from 'styled-components';

const RegisterSection = styled.div`
height: 90vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: linear-gradient(45deg, lightblue, yellow);
object-fit:cover;
& .registerTitle{
    font-size:50px;
}
& .registerForm{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    label{
        margin:10px 0;
    }
    input{
        background:white;
        border:none;
        outline:none;
        padding:10px;
    }
    & .registerButton{
        margin-top:20px;
        cursor:pointer;
        background:lightcoral;
        border:none;
        color:white;
        border-radius:10px;
        padding:10px;
    }
}
& .loginButton{
    position:absolute;
    top:60px;
    right:20px;
    background-color:teal;
    cursor:pointer;
    border:none;
    border-radius:10px;
    color:white;
    padding:10px;
}
`

export default function RegisterPage() {
    return (
        <RegisterSection>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Name</label>
                <input type="text" placeholder='Enter your name...' />
                <label >Email</label>
                <input type="email" placeholder='Enter your email...' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password...' />
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButton">Login</button>
        </RegisterSection>
    )
}
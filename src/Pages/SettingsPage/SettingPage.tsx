import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../Components/Sidebar/Sidebar';
const nature = require('../../Assets/nature.jpeg')
const SettingSection = styled.div`
display:flex;
& .settingsWrapper{
    flex:9;
    padding:20px;
    & .settingsTitle{
        display:flex;
        align-items:center;
        justify-content: space-between;
        & .settingsUpdateTitle{
            font-size:30px;
            margin-bottom:20px;
            color:lightcoral;
        }
        & .settingsDeleteTitle{
            color:red;
            font-size:12px;
            cursor:pointer;
        }
    }
    & .settingsForm{
        display:flex;
        flex-direction:column;
        & .settingProfilePic{
            display:flex;
            align-items:center;
            marging:10px 0;
            img{
                width:70px;
                height:70px;
                border-radius:20px;
                object-fit:cover;
            }
            & .settingProfilePicIcon{
                width:25px;
                height:25px;
                border-radius:50%;
                background:lightcoral;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-left:10px;
                cursor:pointer;
            }
        }
        label{
            font-size:20px;
            margin-top:20px;
        }
        input{
            color:gray;
            margin:18px 0;
            height:30px;
            border:none;
            outline:none;
            border-bottom:1px solid lightgray;
        }
        & .settingsSubmit{
            width:150px;
            align-self:center;
            border:none;
            border-radius:10px;
            color:white;
            background-color:teal;
            padding:10px;
            margin-top:20px;
            cursor:pointer;
        }
    }
}
`
function Settings(){
    return(
        <SettingSection>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form  className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingProfilePic">
                        <img src={nature} alt=""  />
                        <label htmlFor='fileInput'>
                            <i className="settingProfilePicIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Username' />
                    <label>Email</label>
                    <input type='email' placeholder='Email' />
                    <label>Password</label>
                    <input type='password' placeholder='*******' />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </SettingSection>
    )
}
export default Settings
import React from 'react';
import styled from 'styled-components';
const NaturePic = require('../../Assets/nature.jpeg')

const SideBar = styled.div`
flex:3;
margin:20px;
padding-bottom:30px;
background-color:#fdfbfb
border-radius:10px;
display:flex;
flex-direction:column;
align-items:center;
& .sidebarItem{
    display:flex;
    flex-direction:column;
    align-items:center;
    & .sidebarTitle{
        margin:10px;
        padding:8px;
        width:80%;
        border-top: 1px solid #a7a4a4;
        border-bottom: 1px solid #a7a4a4;
        font-family:'Varela Round', 'sans-sarif';
        font-size:12px;
        color:#222;
        font-weight:600;
        line-height:20px;
        text-align:center;
    }
    img{
        margin-top:10px;
    }
    p{

      width:60%;
      margin: 10px auto;  
    }
    
    & .sidebarlist{
        width:100%;
        list-style:none;
        margin-botom:30px;
        & .sidebarlistitem{
            display:inline-block;
            width:50%;
            margin-top:15px;
            cursor:pointer;
        }
    }
    & .sidebarsocial{
        margin-top:15px;
        width:250px;
        align-items:center;
        justify-content:center;
        text-align:center;
        & .sidebaricon{
            font-size:16px;
            margin-left:10px;
            cursor:pointer;
        }
    }
}
`
function Sidebar() {
    return (
        <SideBar>
            <div className="sidebarItem">
                <div className="sidebarTitle">About me</div>
                <img src={NaturePic} className='sidebarimg' />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto quis dolorum exercitationem pariatur consequuntur qui quisquam
                    reiciendis voluptatibus eos simi
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">Life</li>
                    <li className="sidebarlistitem">Music</li>
                    <li className="sidebarlistitem">Style</li>
                    <li className="sidebarlistitem">Sport</li>
                    <li className="sidebarlistitem">Tech</li>
                    <li className="sidebarlistitem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarsocial">
                    <i className="sidebaricon fa-brands fa-facebook-square"></i>
                    <i className="sidebaricon fa-brands fa-twitter-square"></i>
                    <i className="sidebaricon fa-brands fa-pinterest-square"></i>
                    <i className="sidebaricon fa-brands fa-instagram-square"></i>

                </div>

            </div>
        </SideBar>
    )
}
export default Sidebar;
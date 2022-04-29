import styled from 'styled-components';
const nature = require('../../Assets/nature.jpeg')

const Topbar = styled.div`
width:100%;
height:40px;
position: sticky;
top:0;
display:flex;
align-items:center;
background:white;
font-family: 'Josefin Sans', sans-serif;
z-index:999;
& .topleft,.topright{
    flex:3;
    display:flex;
    align-item:center;
    justify-content:center;
}
& .topimage{
    width:40px;
    height:40px;
    border-radius:50%;
}
& .topicon{
    font-size:20px;
    margin-right:10px;
    color: #4444;
    cursor:pointer;
}
& .topcenter{
    flex:6
}
& .toplist{
    display:flex;
    justify-content:center;
    margin:0;
    padding:0;
    list-style:none
}
& .toplistitem{
    margin-right:20px;
    font-size:18px;
    font-weight:300;
    cursor:pointer
}
& .topsearchicon{
    font-size:18px;
    color:#6666;
    cursor:pointer;
    margin-left:15px;
    padding-top:10px
}
`;

function TopBar(){
    return(
        <Topbar>
            <div className ='topleft'>
                <i className="topicon fa-brands fa-facebook-square"></i>
                <i className="topicon fa-brands fa-twitter-square"></i>
                <i className="topicon fa-brands fa-pinterest-square"></i>
                <i className="topicon fa-brands fa-instagram-square"></i>
            </div>
            <div className ='topcenter'>
                <ul className='toplist' >
                    <li className='toplistitem'>HOME</li>
                    <li className='toplistitem'>ABOUT</li>
                    <li className='toplistitem'>CONTACT</li>
                    <li className='toplistitem'>WRITE</li>
                    <li className='toplistitem'>LOGOUT</li>
                </ul>
            </div>
            <div className ='topright'>
                <img 
                    className='topimage'
                    src={nature}
                    alt='profile'
                />
                <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </Topbar>
    )
}
export default TopBar;
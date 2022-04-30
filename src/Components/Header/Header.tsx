import React from 'react';
import styled from 'styled-components';
const nature = require('../../Assets/nature.jpeg')

const HeaderSection = styled.div`
margin-top:90px;

& .headertitle{
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'Lora','serif';
    color:#444;
    
    & .headerTitlesm{
        position:absolute;
        top:10%;
        font-size:20px;
        
    }
    & .headerTitlelg{
        position:absolute;
        top:10%;
        font-size:100px;
    }
}
& .headerimg{
    width:100%;
    height:450px;
    margin-top:8px;
    object-fit:cover;
}
`
function Header(){
    return(
        <HeaderSection>
            <div className="headertitle">
                <span className='headerTitlesm'>React & node</span>
                <span className='headerTitlelg'>Blog</span>
            </div>
            <img 
                className='headerimg'
                alt='header '
                src= {nature}
            />
        </HeaderSection>
    )
}
export default Header
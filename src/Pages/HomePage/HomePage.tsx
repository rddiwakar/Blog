import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import Posts from '../../Posts/Posts';
import styled from 'styled-components';

const HomeSection = styled.div`
& .home{
    display:flex;
}
`

function Home() {
    return (
        <HomeSection>  
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </ HomeSection>
    )
}
export default Home
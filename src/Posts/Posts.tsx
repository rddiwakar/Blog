import React from 'react';
import styled from 'styled-components';
import Post from './Post/Post';

const PostsSection= styled.div`
flex:9;
display:flex;
flex-wrap:wrap;
margin:20px 30px;
`
function Posts(){
    return(
        <PostsSection>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </PostsSection>
    )
}
export default Posts;
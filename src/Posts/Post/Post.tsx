import React from 'react';
import styled from 'styled-components';
const natureImg = require('../../Assets/nature.jpeg')

const PostSection= styled.div`
width:385px;
margin:0 25px 40px 25px;
& .postimage{
    width:100%;
    height:280px;
    object-fit:center;
    border-radius:7px;
}
& .postInfo{
    display:flex;
    flex-direction:column;
    align-items:center;
    & .postcat{
        font-family:"Varela Round", 'san-sarif';
        font-size:11px;
        color:#be9656;
        line-height:20px;
        margin-top:15px;
        margin-right:10px;
        cursor:pointer;
    }
}
& .postTitle{
    font-family:'Josefin Sans',sans-sarif;
    font-size:20px;
    font-weight:700;
    margin-top:10px;
    cursor:pointer;
}
& .postDate{
    font-family: 'Lora',sarif;
    font-style:italic;
    font-size;13px;
    color:#999;
    margin-top:10px;
}
& .postdisc{
    font-family:'Varela Round',sans-sarif;
    font-size:14px;
    color:#444;
    line-height:24px;
    margin-top:10px;
    overflow:hidden;
    text-overflow:ellipses;
    display:-webkit-box;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
}
`
function Post(){
    return(
        <PostSection>
            <img src={natureImg} alt="" className="postimage" />
            <div className="postInfo">
                <div className="postcats">
                    <span className="postcat">Music</span>
                    <span className="postcat">life</span>
                </div>
                <div className="postTitle">
                    Lorem  adipisicing elit. quod maxime 
                </div>
                <hr />
                <span className="postDate"> 1 hr ago</span>
            </div>
            <p className="postdisc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam porro pariatur, facere sunt aspernatur neque, numquam iusto corrupti itaque minus commodi 
                similique corporis aliquam vel accusamus. Commodi inventore alias iure.
            </p>
        </PostSection>
    )
}
export default Post;
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../Components/Sidebar/Sidebar';
const nature = require('../../Assets/nature.jpeg')

const SinglePostSection = styled.div`
display:flex;
& .singlePost{
    flex:9;
    & .singlePostWrapper{
        padding:20px;
        & .singlePostImag{
            width:100%;
            height:300px;
            border-radius:5px;
            object-fit:cover;
        }
        & .singlePostTitle{
            font-family:'Lora',serif;
            font-size:28px;
            text-align:center;
            margin:10px;
            & .singlePostEdit{
                float:right;
                font-size:16px;
            }
            & .singlePostIcon{
                margin-left:10px;
                cursor:pointer;
            }
            & .singlePostEditIcon{
                color:teal;
            }
            & .singlePostIcon:last-child{
                color:tomato;
            }
        }
        & .singlePostInfo {
            margin-bottom:20px;
            display:flex;
            justify-content:space-between;
            font-size:10px;
            color:#b39656;
            font-family:'Varela Round','sans-sarif';
        }
        & .singlePostDisc{
            line-height:25px;
            font-size:18px;
            color:#666
        }
        & .singlePostDisc::first-letter{
            margin-left:20px;
            font-size:30px;
            font-weight:600;
        }
    }
}
`
function SinglePost() {
    return (
        <SinglePostSection>
            <div className='singlePost'>
                <div className="singlePostWrapper">
                    <img src={nature} alt="" className="singlePostImag" />
                    <h1 className="singlePostTitle">
                        Rahul is a d eijfla
                        <div className="singlePostEdit">
                            <i className="'singlePostICon singlePostEditIcon fa-solid fa-pen-to-square"></i>
                            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className='singlePostAuthor'>Author:<b>Name</b> </span>
                        <span className='singlePostDate'>1hr ago </span>
                    </div>
                    <p className='singlePostDisc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus officiis alias quasi quisquam dolorem quam accusamus labore porro fugiat ipsam minus,
                        harum aliquam voluptatem provident maiores ut consequuntur fuga. Veniam.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti quia vitae
                        hic eveniet, laboriosam odio libero quibusdam
                        voluptate corporis error
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus officiis alias quasi quisquam dolorem quam accusamus labore porro fugiat ipsam minus,
                        harum aliquam voluptatem provident maiores ut consequuntur fuga. Veniam.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti quia vitae
                        hic eveniet, laboriosam  praesentium deleniti nobis quasi dolorem pariatur minus animi provident?
                    </p>
                </div>
            </div>
            <Sidebar />
        </SinglePostSection>
    );
}

export default SinglePost;
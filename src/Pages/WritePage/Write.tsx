import React from 'react';
import styled from 'styled-components';
const nature=require('../../Assets/nature.jpeg')

const WriteSection = styled.div`

padding-top:50px;
& .writeImg{
    margin-left:150px;
    width:70vw;
    height:250px;
    border-radius:10px;
    object-fit:cover;
}
& .writeForm{
    position:relative;
    margin-left:150px;
    & .writeContainer{
        display:flex;
        align-items:center;
        & .writeIcon{
            width:25px;
            height:25px;
            border-radius:50%;
            border: 1px solid black;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
            color:gray;
        }
    }
    & .writeInput{
        font-size:30px;
        padding:20px;
        border:none;
        width:70vw;
    }
    & .writeInput:focus{
        outline:none;
    }
    & .writeFormGroup{
        display:flex;
        align-items:center;
        & .writeText{
            font-size:20px;
            height:100vh;
        }
    }
    & .writeSubmit{
        position:absolute;
        top:20px;
        right:50px;
        color:white;
        background:teal;
        padding:10px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        font-size:16px;
    }   
}
`
function WritePage(){
    return(
        <WriteSection>
            <img 
                src={nature} 
                alt="" 
                className="writeImg" 
            />
            <form className='writeForm'>
                <div className="writeContainer">
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input 
                        type="file" 
                        name='' 
                        id='fileInput' 
                        style={{display:'none'}} 
                    />
                    <input 
                        type='text' 
                        placeholder='Title' 
                        className='writeInput' 
                        autoFocus 
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Tell your story ...' 
                        className='writeInput writeText'
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </WriteSection>
    )
}
export default WritePage;
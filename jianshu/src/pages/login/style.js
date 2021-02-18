import styled from "styled-components";

export const LoginWrapper = styled.div`
    position:relative;
    background:#f1f1f1;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    
    .img{
        position:absolute;
        top:56px;
        left:50px;
        img{
            width:100px;
        }
    }
`
export const SignWrapper = styled.div`
    width:400px;
    background:#fff;
    margin-top:100px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    padding:50px 50px 30px;
   .input{
        position:relative;
        width:100%;
        height:50px;       
        border:1px solid #c8c8c8;
        input{
            background:hsla(0,0%,71%,.1);
            height:48px;
            width:100%;
            line-height:48px;
            padding-left:30px;
        }
        i{
        position:absolute;
        top:15px;
        left: 5px;
        } 
   }
   button{
        width:100%;
        line-height:40px;
        margin-top:20px;
        border-radius:20px;
        color:#fff;
        font-size:20px;
        cursor:pointer;
        &.sign_in{
            background:#3194D0;
            &:hover{
            background:#187cb7;
            }
        }
        &.sign_up{
            background:#42c02e;
            &:hover{
                background:#3db922;
            }
        }
        
   }
   
    
`

export const Title =styled.div`
    display:flex;
    justify-content:center;
    padding:10px;
    font-size:18px;
    color:#969696;
    margin-bottom:50px;
    p{
        padding:10px;
        color:#969696;
        cursor:pointer;
        outline:none;
    }
    .active{
        color:#ea6f5a;
        border-bottom:2px solid #ea6f5a;
        font-weight:700;
    }
    p:hover{
        border-bottom:2px solid #ea6f5a;
    }
    b{
        padding:10px;
        color:#969696;
        font-size:12px;
    }
`

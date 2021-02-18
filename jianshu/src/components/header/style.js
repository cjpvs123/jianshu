import styled from 'styled-components'

export const  HeaderWrapper =styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:58px;
    width:100%;
    border-bottom:1px solid #dcdcdc;
    img{
        width:100px;
        height:56px;
        margin-right:30px;
    }
    .content_div{
        width:850px;
        height:58px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        font-size:17px;
        color:#333 ;
        .item_left{
            display:flex;  
            align-items:center;
            i{
               width:30px;
               height:30px;
               line-height:30px;
               margin-left:-32px;
               text-align:center;
               border-radius:15px;
               cursor:pointer;
               &.focused{
                    background:rgba(150,150,150);
                    color:#fff
               }
            }    
        }
        .item_right{
            display:flex;
            color:#969696;
        }
        div{
            padding:15px;
        }
    }
    .button_div{
        height:58px;
        margin-left:50px;
        display:inline;

        button{
            display:inline;
            line-height:38px;
            margin:10px  ;
            padding:0   20px;
            border-radius:20px;
            font-size:15px;
            cursor:pointer;
            &.left{
                background:#fff;
                color:#EA6F5A;
                border:1px solid #EA6F5A;
            }
            &.right{
               background:#EA6F5A; 
               color:#fff;
            }
        }
    }
`

export const Input = styled.input.attrs({
    placeholder:'搜索'
})`
    background:#EEE;
    height:38px;
    width: ${props=>(props.gender===false?'160px':'240px')};
    margin-left:50px;
    border-radius:20px;
    padding:0 40px 0 20px;
    &::placeholder{
        color:#999;
    }
    &.item-enter{
        width:160px
    }
    &.item-enter-active{
        transition:all .2s  ease-in;
        width:240px
    }
     &.item-exit{
        width:240px
    }
    &.item-exit-active{
        transition:all .2s  ease-in;
        width:160px
    }
    
`



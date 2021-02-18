import styled from 'styled-components'

export const WrapperContent = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
    justify-content:center;
    .leftContent{
        width:640px;
        padding:30px 0 0 15px;
    }
    .rightContent{
        width:280px;
        margin-left:40px;
        padding:30px 0 0 ;
        position:relative;
        img{
            margin-bottom:6px;
            max-width:100%;
        }
        .download{
            display:flex;
            justify-content:space-around;
            align-items:center;
            padding:10px 20px;
            cursor:pointer;
            border:1px solid #f0f0f0;
            img{
                width:60px;
                height:60px;
            }
            p{
                color:#333;
                font-size:15px;
                margin-bottom:5px;
                i{
                    font-size:12px;
                    margin-left:5px;
                   
                }
            }
            h1{
                color:#999;
                font-size:13px;
                
            }
        }
    
`
export const LeftItem =styled.div`     
`
export const ContentWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    margin:0 0 15px;
    padding:15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    div{
        margin-right:20px;
    }

`
export const Title =styled.p`
    color:#333;
    margin:-7px 0 4px;
    font-size:18px;
    font-weight:700;
    line-height:1.5;
`
export const Desc = styled.p`
    color:#999999;
    margin:0 0 8px;
    font-size:13px;
    line-height:24px;
`
export const Img =styled.img`
    width:150px;
    height:100px;
   
    display: ${props=>props.src===''?'none':'inline'}; 
`
export const DownloadImg = styled.div`
    position:absolute;
    width:180px;
    height:180px;
    top:76px;
    left:50px;
    padding:10px;
    background:#fff;
    box-shadow:2px 10px 10px #dcdcdc;
    display:${props=>props.display=== true?'inline':'none'};
    img{
        width:160px;
        height:160px;
    }
`
export const Triangle =styled.div`
    position:absolute;
    top:180px;
    left:45%;
    border-top:10px solid #fff;;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
    border-bottom:10px solid transparent;
`

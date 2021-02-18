import styled from "styled-components";

export const DownloadWrapper = styled.div`
    .bottom{
        text-align:center;  
        margin:50px 0 80px;
        .download{
            position:relative;
            width:140px;
            height:140px;
            margin-bottom:10px;
            z-index:0;
        }
        .background{
            width:765px;
            height:172px;
            position:absolute;
            z-index:-1;
            left:50%;
            margin-left:-380px;
        }
        p{
            font-size:24px;
            
        } 
        .bottom_bottom{
            display:flex;
            justify-content:center;
            margin-top:30px;
            div{
                margin-left:8px;
            }
            img{
                width:56px;
                height:56px;
            }
            p{
                font-size:17px;
            }
            h1{
                font-size:14px;
                font-weight:300;
            }
        }     
    }
`
export const ItemWrapper = styled.div`
    display:flex;
    justify-content:center;
`
export const Item = styled.div`
    width:960px;
    position:relative;
    padding:0 15px;
    z-index:0;
    .first{
        display:flex;
        justify-content:center;
        align-items:center;
        color:#333;
        margin-bottom:40px;
        .logo{
                width:100px;
                height:100px;
        }
        .second{
            margin-left:20px;
            p{
                font-size:30px;
                
            }
            h1{
                font-size:24px;
                font-weight:300;
            }
        }
        
    }
    .pic{
        position:absolute;
        z-index:-1;
        width: 765px;
        height: 172px;
        margin-top: -100px;;
        left:12.5%;
    }
    .third{
        display:flex;
        justify-content:center;
        align-items:center;
        .phone{
            width:410px;
            height:341px;
        }
        .fourth{
            margin-left: 40px;
            .download{
                width:140px;
                height:140px;
            }
            p{
                font-size:24px;
                margin-top:4px;
            }
            h1{
                font-size:16px;
                font-weight:300;
                margin-top:4px;
            }
        }
    }
    .other{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:30px 0;
        color:#333333;
        .creator{
            width:930px;
        }
        .balance{
            width:439.98px;
            height:359.11px;
            padding:0 15px;
            margin:0 0 0 40px;
        }
        .another{
            width:439.98px;
            height:140px;
            margin:76px 0 0 40px;
            padding: 0 15px;
            p{
                font-size:28px;
                font-weight:400;
                margin-bottom:20px;
                
            }
            h1{
                font-size:18px;
                margin:10px 0;
                font-weight:300;
                
            }
        }
        .Feather{
            width:450px;
        }
        .Hello{
            width:410px;
        }
    }
        
    
    
`

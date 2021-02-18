import React from "react";
import Header from "../../components/header";
import {DownloadWrapper,ItemWrapper,Item} from  './style'

export default class Download extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <DownloadWrapper>
                    <ItemWrapper>
                        <Item style={{marginTop:'50px'}}>
                            <div className='first'>
                                <img src='//cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png' alt='' className='logo'/>
                                <div className='second'>
                                    <p>创作你的创作</p>
                                    <h1>一个优质创作社区</h1>
                                </div>
                            </div>
                            <img src='//cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png' alt='' className='pic'/>
                            <div className='third'>
                                <img src='//cdn2.jianshu.io/assets/web/misc-phone-7dfef21cef3585139d67481fbeb3a488.png' alt='' className='phone'/>
                                <div className='fourth'>
                                    <img src='//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png' alt='' className='download'/>
                                    <p>扫码下载简书App</p>
                                    <h1>随时随地发现和创作内容</h1>
                                </div>

                            </div>
                        </Item>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Item>
                            <div className='other'>
                                <img src='//cdn2.jianshu.io/assets/web/misc-pic1-b2e2caa2aec8ff89bd6957f09b4e6fce.png' alt='' className='creator'/>
                            </div>
                        </Item>
                    </ItemWrapper>
                    <ItemWrapper>
                       <Item>
                           <div className='other'>
                                <img src='//cdn2.jianshu.io/assets/web/misc-pic2-378196f0f0c87fee66210c957722605c.png' alt='' className='balance'/>
                                <div className='another'>
                                    <p>多元化的创作社区</p>
                                    <h1>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h1>
                                </div>
                           </div>
                       </Item>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Item>
                            <div className='other'>
                                <div className='another' style={{marginLeft:'80px'}}>
                                    <p>百万创作者在简书相遇</p>
                                    <h1>在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</h1>
                                </div>
                                <img src='//cdn2.jianshu.io/assets/web/misc-pic3-a3e7f05fee99976afbb936eb6d3c288a.png' alt='' className='Feather'/>
                            </div>
                        </Item>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Item>
                            <div className='other'>
                                <img src='//cdn2.jianshu.io/assets/web/misc-pic4-ed9583c5975a6d953f47c09ed63b911b.png' alt='' className='Hello'/>
                                <div className='another'>
                                    <p>自由地交流和沟通</p>
                                    <h1>你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</h1>
                                </div>
                            </div>
                        </Item>
                    </ItemWrapper>
                    <div className='bottom'>
                        <img src='//cdn2.jianshu.io/assets/web/download-apps-page-bottom-qrcode-8c63808111ffb1746c08cbd262adbe2e.png' alt='' className='download'/>
                        <img src="//cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" alt="" className='background'/>

                        <p>扫码下载简书App</p>
                        <div className='bottom_bottom'>
                            <img src='//cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png' alt=''/>
                            <div>
                                <p>创作你的创作</p>
                                <h1>一个优质创作社区</h1>
                            </div>
                        </div>
                    </div>
                </DownloadWrapper>
            </div>
        )
    }
}

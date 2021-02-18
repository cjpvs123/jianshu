import React from "react";
import Header from "../../components/header";
import './style.less'
import EditorConvertToHTML from './richTextEditor'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {addPages} from './store/actionCreators'
import {Redirect} from 'react-router-dom'



class Writing extends React.Component {
    constructor(props) {
        super(props);

        this.ct = React.createRef()
        this.title = React.createRef()
    }

    addPages = () => {
        const title = this.title.current.value
        const contents = this.ct.current.getDetail()
        const newContents = contents.replace(/\t|\n/g, '')
        //将非img标签的标签去除，将img标签及其内容去除。
        const descs = newContents.replace(/<(?!img).*?>/g, '').replace(/<img.*?\/>/g, '')
        const desc = descs.substring(0, 80) + '...'
        //匹配第一个img标签及其内容
        const img = (/<img.*?\/>/g).exec(newContents)[0]
        //将img中的src内容提取出来
        const src = (/".*?"/).exec(img)[0].replace(/"/g, '')
        const history = this.props.history
        console.log('newContents', newContents)
        console.log(title, newContents, desc, src)
        this.props.addPages(title, desc, src, newContents, history)


    }

    render() {
        const {loginState} = this.props

        if (loginState) {
            return (
                <div style={{width: '100%', height: '100%'}}>
                    <Header/>
                    <div className='writingWrapper'>
                        <div className='title'>
                            <label htmlFor='textInput' className='label'>标题:</label>
                            <input type='text' id='textInput' className='input' ref={this.title}/>
                        </div>
                        <div className='content'>
                            <EditorConvertToHTML ref={this.ct}/>
                        </div>
                        <div className='tab'>
                            <Link to='/'>
                                <button>取消</button>
                            </Link>
                            <button onClick={this.addPages}>发表</button>
                        </div>
                    </div>

                </div>
            )
        } else {
            return <Redirect to='/login/sign_in'/>
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        loginState:state.getIn(['login','loginState'])
    }
}
export default connect(mapStateToProps,{addPages})(Writing)

import {reqAddContentPages} from '../../../api/index'
import {reqAddDetailPages} from '../../../api/index'


export const  addPages = (title,desc,src,newContents,history) =>{
    return async () =>{
        const result = await reqAddContentPages(title,desc,src)
        if(result.status === 0 ){
            const _id = result.data._id
            const content = newContents
            const detail = await reqAddDetailPages(_id,title,content)
            if(detail.status === 0){
                alert('添加成功！')
                history.push('/')
            }
        }
    }
}



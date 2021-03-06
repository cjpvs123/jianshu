import axios from 'axios'

export default function ajax(url,data={},type='GET') {
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){
            promise = axios.get(url,data)
        }
        else{
            promise = axios.post(url, data)
        }
        promise.then(res=>{
            resolve(res.data)
        }).catch(error=>{
            reject('请求出错'+error)
        })
    })
}

import store from  'store'
const USER_KEY='user_key';
export default {
    /*setItem(value){
        localStorage.setItem(USER_KEY,JSON.stringify(value))
    },
    getItem(){
        return JSON.parse(localStorage.getItem(USER_KEY)||{})
    },
    moveItem(){
        localStorage.removeItem(USER_KEY)
    }*/
    saveUser(value){
        store.set(USER_KEY,value)
    },
    getUser(){
        store.get(USER_KEY)
    },
    removeUser(){
        store.remove(USER_KEY)
    }
}

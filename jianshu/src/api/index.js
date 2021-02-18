import ajax from "./ajax";

const BASE =''

export const reqGetItemList = ajax(BASE + '/content/find');

export const reqGetDetail = (id)=>  ajax(BASE + '/detail/find?detail_id='+id);

export const reqLogin = (username,password) => ajax(BASE + '/login',{username, password},"POST")

export const reqRegister = (username,phone,password) => ajax(BASE + '/register',{username,phone,password},"POST")

export const reqAddContentPages = (title,desc,src) => ajax(BASE + '/content/add',{title,desc,src},'POST')

export const reqAddDetailPages  = (detail_id,title,content) => ajax(BASE + '/detail/add',{detail_id,title,content},'POST')

export const reqSearchItemList = (searchContent) =>ajax(BASE + '/content/search',{searchContent},'POST')


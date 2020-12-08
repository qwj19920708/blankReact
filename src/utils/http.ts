import axios from 'axios'

type getRequest = <T>( url: string, params : any ) => Promise<T>

type postRequest = <T>( url: string, data : any ) => Promise<T>

const http = axios.create({ 
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
})

// 请求拦截器
http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 返回拦截器
http.interceptors.response.use(res => {
    return res
}, error => {
    return Promise.reject(error)
})
  
const getAxios:getRequest = function(url:string, parmas: any) {
    return new Promise((resolve, reject)=>{
        http.get(url, {params : parmas}).then(
            res => { resolve(res.data) }
        ).catch(err => {
            reject(err)
        })
    })
}
 
const postAxios:postRequest = function(url:string, data: any) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject)=>{
        http.get(url, data).then(
            res => { resolve(res.data) }
        ).catch(err => {
            reject(err)
        })
    })
}

export {
    getAxios, postAxios
}
/**
 *  @description: 用于建立的是网络请求包
 *  @author: yuansudong
 *  
 *  
 */
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// create an axios instance
const service = axios.create({
  baseURL: "http://192.168.1.185:8080", // api 的 base_url
  timeout: 5000, // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service




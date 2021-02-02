import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// 1.创建axios实例
const service = axios.create({
  // 公共接口--这里注意后面会讲,url = base url + request url
  baseURL: process.env.VUE_APP_SERVER_URL,

  // baseURL: 'https://api.example.com',
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5 * 1000
})

// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息,使用JWT可关闭
service.defaults.withCredentials = false

service.interceptors.response.use(
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  response => {
    const res = response.data
    // 如果自定义代码不是200，则将其判断为错误。
    if (res.code !== 200) {
      // 50008: 非法Token; 50012: 异地登录; 50014: Token失效;
      if (res.code === 401 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        MessageBox.confirm('会话失效，您可以留在当前页面，或重新登录', '权限不足', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          window.location.href = '#/login'
        })
      } else { // 其他异常直接提示
        Message({
          showClose: true,
          message: '⚠' + res.message || 'Error',
          type: 'error',
          duration: 3 * 1000
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    /** *** 接收到异常响应的处理开始 *****/
    // console.log('err' + error) // for debug
    Message({
      showClose: true,
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
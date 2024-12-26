import axios from 'axios'
import type { AxiosInstance } from 'axios'

// 创建一个 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://ecs.loafer.online', // 替换为您的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 添加请求拦截器（可选）
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器（可选）
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data // 直接返回数据
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  },
)

export default axiosInstance

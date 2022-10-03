import axios from "axios";

const baseUrl = (import.meta.env.PROD ? "" : "/dev") + "/star/sso/api";

const service = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

/**
 * 响应拦截器
 * @param { object } response 响应参数
 */
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;

import axios from "axios";

const baseUrl = process.env.NODE_ENV === "production" ? "/dev" : "/star";

const service = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

// /**
//  * 请求拦截器
//  * @param { object } config 请求参数
//  */
service.interceptors.request.use(
  (config) => {
    // config.headers['access-token'] = sessionStorage.getItem('token')
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// /**
//  * 响应拦截器
//  * @param { object } response 响应参数
//  */
// service.interceptors.response.use(
//   (response) => {
//     if (response.status === statusCode.responseSuccess) {
//       return response.data;
//     } else {
//       return response.data;
//     }
//   },
//   (error) => {
//     if (error) {
//       if (error.response) {
//         let httpError = {
//           hasError: true,
//           status: error.response.status,
//           statusText: error.response.statusText,
//         };
//         errorHandle(httpError.status, httpError.statusText);
//       } else {
//         // show toast
//       }
//       return Promise.reject(error);
//     } else {
//       // show toast
//     }
//   }
// );

export default service;

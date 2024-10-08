import axios from 'axios'
// import { Message } from 'element-plus'
// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/app/' : '', // process.env.VUE_APP_BASE_URL, // url = base url + request url
  // baseURL: process.env.NODE_ENV === 'production' ? '/app/' : '/app/', // process.env.VUE_APP_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (['delete', 'get'].includes(config.method)) {
      if (!config.params) {
        config.params = {}
      }
    } else if (['post', 'put'].includes(config.method)) {
      if (!config.data) {
        config.data = {}
      }
    }

    config.headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage['hsja_X_token_base']}`,
      // authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ZmFsc2UsImF1ZCI6ImhzamEtYXJjLXJlYWN0b3ItdXNlciIsImV4cCI6MTY2OTM0OTA3NzE2NywiaWF0IjoxNjY5MzQxODc3MTY3LCJpc3MiOiJoc2phLWRldiIsImp0aSI6IjVjNTlkMGUyLTFiNjMtNGZlMy1hMGVlLWQwYTEyMTZhYWU3MyIsIm5iZiI6MTY2OTM0MTg3NzE2Nywib3JncyI6WzMxMV0sInJvbGVzIjpbNzksOTddLCJzdWIiOiJhcmMtcmVhY3RvciIsInVzZXJJZCI6MjgxLCJ1c2VybmFtZSI6Imh5YWRtaW4ifQ.q65rhbOlRZ9u5oxKPNNI7gv7cV7wEAOqnn_5hys5v3k`,
      frontApplication: window.hsja_activePageData
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.data && !res.code) {
      // 一般是文件下载
      return response
    }
    // if (res.code !== 0 && res.code !== '0' && res.code !== 200) {
    //   Message.warning(res.msg || res.message)
    //   return Promise.reject(new Error(res.msg || res.message || 'Error'))
    // } else {
    //   return res.data
    // }
  },
  error => {
    console.log(error.message)
    return Promise.reject(error)
  }
)

export function get(arg) {
  return service({ ...arg, method: 'get' })
}

export function downLoad(arg) {
  return service({
    ...arg,
    method: 'get',
    responseType: 'blob'
  })
}

export function post(arg) {
  return service({
    ...arg,
    method: 'post'
  })
}
export function put(arg) {
  return service({
    ...arg,
    method: 'put'
  })
}

export function del(arg) {
  return service({
    ...arg,
    method: 'delete'
  })
}

export default service

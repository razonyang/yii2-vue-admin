import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getLanguage } from '@/lang/index'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (!config.params) {
      config.params = {}
    }

    // language
    const lang = getLanguage()
    if (lang) {
      config.params.lang = getLanguage()
    }

    // format
    config.params.format = 'json'

    // do something before request is sent
    // const method = config.method;
    if (store.getters.token) {
      config.params.access_token = getToken()
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    // if (method === 'get') {
    //   config.params = qs.stringify(config.params)
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (response.status.toString().indexOf('20') !== 0 || (res && res.status !== 'success')) {
      console.error(res)
      var message = ''
      if (res.status === 'error') {
        message = res.message
      } else {
        for (var field in res.data) {
          message = res.data[field]
          break
        }
      }
      Message({
        message: message,
        type: 'error',
        duration: 10 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 401) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.error(error) // for debug
    Message({
      message: error.response ? error.response.data.message : error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

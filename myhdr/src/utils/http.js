import axios from 'axios'
// axios.interceptors.response.use(function (response) {
//   console.log(response)
//   if (response.code) {

//   }
//   return response
// }, function (error) {

//   return Promise.reject(error)
// })

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 10000
})

export default instance
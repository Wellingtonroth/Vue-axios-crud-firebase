import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-97a92-default-rtdb.firebaseio.com/'

// Estes headers serviriam se eu estivesse usando o axios de forma global.
// axios.defaults.headers.common['Authorizaion'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-97a92-default-rtdb.firebaseio.com/',
      headers: {
        "Authorization": "abc123"
      }
    })

    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)
      // if(config.method == 'post') {
      //   config.method = 'put'
      // }
      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
      // const array = []
      // for(let chave in res.data) {
      //   array.push({ id: chave, ...res.data[chave] })
      // }
      // res.data = array
      return res
    }, error => Promise.reject(error))
  }
})

// Posso definir uma instancia(não globalmente igual a forma que esta descomentado) pra cada que eu quiser, 
// com as config que quiser, por exemplo: api de sistema do google, api de seila o que, api de qualquer coisa.
// Vue.use({
//   install(Vue) {
//     Vue.prototype.$http = axios.create({
//       baseURL: 'https://curso-vue-97a92-default-rtdb.firebaseio.com/'
//     })
//   }
// })
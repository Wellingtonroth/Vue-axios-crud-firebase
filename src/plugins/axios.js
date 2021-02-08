import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-97a92-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios

    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)
      // if(config.method == 'post') {
      //   config.method = 'put'
      // }
      return config
    })
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
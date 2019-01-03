import axios from 'axios'
import Qs from 'qs'

export default {
  install(vue) {
    vue.prototype.$rpc = function({rpc, data}) {
      return new Promise((success, fail) => {
        axios({
          method: 'post',
          url: ENV.baseUrl + rpc + '?wsdl',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          responseType: "json",
          data: Qs.stringify(data)
        }).then((e) => {
          if (e.data.status == 0) {
            success(e.data.data)
          } else {
            vue.$toast(e.data.message)
            fail(e.data)
          }
        }).catch((e) => {
          fail(e)
        })
      })
    }
  }
}

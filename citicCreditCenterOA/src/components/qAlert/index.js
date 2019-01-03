import qAlert from "./index.vue"
// class Acception {
//   constructor(method) {
//     this.method = method
//     method(this.resolve)
//   }
//   resolve(e) {}
//   then() {}
// }

let register = function(Vue) {
  let Profit = Vue.extend(qAlert)
  let dialog = function(e) {
    let instance = new Profit({
      propsData: e,
    })
    instance.removeDialog = function() {
      instance.$el.parentNode.removeChild(instance.$el)
    }
    instance.then = function(method) {
      this.$on('result', e=>this.isShow = method(e))
    }
    document.body.appendChild(instance.$mount().$el)
    instance.value = true
    return instance
  }
  Vue.prototype.$dialog = dialog
  window.dialog = dialog
}
export default register

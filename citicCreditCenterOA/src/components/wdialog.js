import Vue from "vue"
import wDialog from "@/components/wdialog.vue"
//wDialog 一个对象
//model 虚拟的节点
var Instance = Vue.extend(wDialog)
var message = function() {
  let a = function(e) {
    var model = new Instance({
      propsData: e
    })
    model.onhide = function() {
      model.value = false
      setTimeout(() => {
        document.body.removeChild(model.$el)
      }, 200)
    }
    model.$mount()
    document.body.appendChild(model.$el)
    model.value = true
    // model.$on('input', function(e) { console.log(e) })
    // 五秒后移除
    // setTimeout(() => {
    //   document.body.removeChild(model.$el)
    // }, 5000)
  }

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$tost = a
  window.dialog = a
}

export default message

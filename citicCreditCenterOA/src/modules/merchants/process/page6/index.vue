<template>
  <div class="all">
    <div @click="show = !show" class="button">标签触发</div>
    <div @click="dialoging()" class="button">js触发</div>
    <q-alert :btns="btns"
             :title="title"
             v-model="show"
             @result="click"
    >
      <span>
        告知当前状态，信息和解决方法最好不要超过两行。
      </span>
      <img src="@a/details/付款.png" slot="img">
      <input type="text" placeholder="请在此处编辑信息">
    </q-alert>
  </div>
</template>

<script>
import qAlert from "@/components/qAlert/index.vue"
export default {
  data() {
    return {
      btns: [['辅助操作', '取消'], 'faf', ['更多', '退款']],
      title: '标题单行',
      alert: {
        btns: [{name: '这是name'}, {name: 'fawef'}],
        title: '这是dialog',
        content: '这是按钮弹框出来的内容内容内容',
        imgSrc: require('@a/details/付款.png'),
        inputPlace: {
          type: 'text',
          placeholder: '请在此处编辑信息',
        }
      },
      value: '',
      show: false,
      dydialog: ''
    }
  },
  components: {
    qAlert
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    dialoging() {
      this.$dialog(this.alert).then(e=> {
        console.log(e)
        this.show = true
        return true
      })
    },
    click(e) {
      console.log(e)
      this.$dialog(this.alert).then(e=> {
        console.log(e)
        return false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// .total{
//   display: none;
// }
.button{
  width:1.5rem;
  height:0.5rem;
  text-align: center;
  border:1px solid black;
}
.all{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>


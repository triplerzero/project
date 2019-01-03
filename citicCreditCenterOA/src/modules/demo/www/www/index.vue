<template>
  <t-page>
    <w-dialog :title="info.title"
              :content="info.content"
              :btns="info.btns"
              :imgs="info.imgs"
              v-model="exist"
    >
      <!-- <input type="text" placeholder="请在此处编辑信息" slot="input"> -->
    </w-dialog>
    <div class="btn">
      <div @click="leftClick()">左点击</div>
      <div @click="rightClick()">右点击</div>
    </div>
  </t-page>
</template>

<script>
import wDialog from "@/components/wdialog.vue"
export default {
  data() {
    return {
      exist: false,
      info: {
        title: "标题单行",
        content: "告知当前状态，信息和解决方法最好不要超过两行。",
        // btns: [["去设置开启通知"], ["辅助操作", "主操作"]],
        btns: [[{info: '确定'}], [{info: '辅助操作'}, {info: '主操作'}], [{info: '确定'}]],
        imgs: require('@/assets/main/代理人.png')
      }
    }
  },
  methods: {
    leftClick() {
      this.$tost(this.info)
    },
    rightClick() {
      this.exist = !this.exist
    }
  },
  components: {
    wDialog
  }
}
</script>

<style lang="scss" scoped>
.btn{
  width: 7rem;
  margin: .2rem auto;
  display: flex;
  flex-direction: row;
  align-items: cneter;
  justify-content: space-between;
  font-size: .36rem;
  color: white;
  > div{
    width: 40%;
    line-height: 1rem;
    background: dodgerblue;
    text-align: center;
    border-radius: 4px;
  }
}
</style>


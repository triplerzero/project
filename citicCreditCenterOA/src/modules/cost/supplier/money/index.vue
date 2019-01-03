<!-- 费用报销页面 -->
<!-- @param name [string] 费用报销人姓名-->
<!-- @param title [string] 报销类型-->
<!-- @param price [number] 报销金额-->
<!-- @param date [string] 报销申请时间-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">
      <div class="big">费用报销</div>
    </t-header>
    <div>
      <q-selector
        v-for="(item,index) in data"
        :key="index"
        :name="item.name"
        :date="item.date"
        :title="item.title"
        :state="item.state"
        :price="item.price"
        @clicks="item.state = !item.state"
        @click="goPage('/cost/supplier/pay1')"
      ></q-selector>
    </div>
    <div slot="bottom">
      <q-fotter all="全选" @all="choose()" disagree="驳回" pass="通过" :selected1="isAllChoose"></q-fotter>
    </div>
  </t-page>
</template>
<script>
import qSelector from "@/components/qSelector.vue"
import qFotter from "@/components/qFotter.vue"
export default {
  data() {
    return {
      //是否选择所有的报销人
      isAllChoose: false,
      data: [
        {
          name: "丁敏德",
          title: "财务部丁敏德北京出差报销",
          price: "23.00",
          date: "2018/08/21",
          // 是否选择该报销人
          state: true
        },
        {
          name: "丁敏德",
          title: "财务部丁敏德北京报销招待费",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "丁敏德",
          title: "财务部丁敏德北京报销招待费",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "丁敏德",
          title: "财务部丁敏德北京报销招待费",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "丁敏德",
          title: "财务部丁敏德北京报销招待费",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "丁敏德",
          title: "财务部丁敏德北京报销招待费",
          price: "23.00",
          date: "2018/08/21",
          state: false
        }
      ]
    }
  },
  methods: {
    /**
     * @function 选择所有报销人
     */
    choose() {
      this.isAllChoose = !this.isAllChoose
      for (let i of this.data) {
        i.state = this.isAllChoose
      }
    },
    /**
     * @function 点击查看该报销人费用申请详情
     */
    goPage(e) {
      this.$router.push(e)
    }
  },
  components: {
    qSelector,
    qFotter
  }
}
</script>
<style lang="scss" scoped>
.big {
  font-size: 0.36rem;
}
</style>



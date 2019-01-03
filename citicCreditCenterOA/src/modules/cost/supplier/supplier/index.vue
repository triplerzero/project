<!-- 供应商付款页面 -->
<!-- @param name [string] 供应商者名字-->
<!-- @param title [string] 供应商名称-->
<!-- @param price [number] 供应商付款的价格-->
<!-- @param date [string] 供应商付款时间-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">
      <div class="big">供应商付款</div>
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
        @click="goPage('/cost/supplier/pay2')"
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
      //是否选择全部供应商
      isAllChoose: false,
      data: [
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          //是否选择该供应商
          state: true
        },
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          state: false
        },
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
          state: false
        }
      ]
    }
  },
  methods: {
    /**
     * @function 选择全部供应商
     */
    choose() {
      this.isAllChoose = !this.isAllChoose
      for (let i of this.data) {
        i.state = this.isAllChoose
      }
    },
    /**
     * @function 点击对应供应商查看详情
     */
    goPage(e) {
      this.$router.push(e)
    }
  },
  components: {
    qSelector, qFotter
  }
}
</script>
<style lang="scss" scoped>
.big {
  font-size: 0.36rem;
}
</style>



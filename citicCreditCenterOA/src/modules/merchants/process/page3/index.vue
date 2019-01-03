<template>
  <t-page>
    <t-header slot="top">供应商付款</t-header>
    <q-selector v-for="(item,index) in data"
                :key="index"
                :name="item.name"
                :date="item.date"
                :title="item.title"
                :state="item.state"
                :price="item.price"
                @click="item.state = !item.state"
    >
    </q-selector>
    <div class="bottom" slot="bottom">
      <div class="first-bottom">
        <div class="none" @click="allChoose()">
          <img src="../assets/椭圆 541.png" v-if="isAllChoose">
        </div>
        <span>全选</span>
      </div>
      <div>驳回</div>
      <div>通过</div>
    </div>
  </t-page>
</template>
<script>
import qSelector from "../components/qSelector.vue"
export default {
  data() {
    return {
      isAllChoose: false,
      data: [
        {
          name: "李辉华",
          title: "供应商",
          price: "23.00",
          date: "2018/08/21",
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
        }
      ]
    }
  },
  methods: {
    allChoose() {
      this.isAllChoose = !this.isAllChoose
      for (let i of this.data) {
        i.state = this.isAllChoose
      }
    }
  },
  components: {
    qSelector
  }
}
</script>
<style lang="scss" scoped>
.bottom{
  height: 1rem;
  width: 7.5rem;
  display: flex;
  align-items: center;
  font-size:0.32rem;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  .first-bottom{
    height: 1rem;
    width: 3.51rem;
    background: #FFFFFF;
    display: flex;
    align-items: center;
  }
  div:nth-child(2){
    height: 1rem;
    width: 2rem;
    background: #FFCBCD;
    color: #D70008;
    text-align: center;
    line-height: 1rem;
  }
  div:nth-child(3){
    height: 1rem;
    width: 2rem;
    background: #D70008;
    color: #FFFFFF;
    text-align: center;
    line-height: 1rem;
  }
}

.none {
  width: 0.34rem;
  height: 0.34rem;
  margin-left: 0.12rem;
  margin-right: 0.14rem;
  border: 1px #dddddd solid;
  border-radius: 50%;
    img {
  width: 0.34rem;
  height: 0.34rem;
}
}
</style>



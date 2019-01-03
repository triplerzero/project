<!-- 常用语设置页面 -->
<!-- @param advice [string] 设置的常用语内容-->
<!-- @param date [string] 设置常用语的时间-->
<template>
  <t-page>
    <t-header slot="top">
      <div class="big">常用语设置</div>
      <div slot="right">
        <span class="add" @click="add()">添加</span>
      </div>
    </t-header>
    <div>
      <t-input :youradvice="item.advice" :date="item.date" :value="item.choice" v-for="(item, index) in arr" :key="index" @clickHandler="click(item)"></t-input>
    </div>
    <t-bottom slot="bottom">
      <div class="fotter">
        <div class="select">
          <div class="mycricle" @click="all()">
            <span :class="{'colors':b}"></span>
          </div>
          <span class="content">全选</span>
        </div>
        <div class="del" @click="leftClick()">删除</div>
      </div>
    </t-bottom>
  </t-page>
</template>

<script>
import tInput from "../component/myInput"
// import {mapState} from 'vuex'
export default {
  data() {
    return {
      //exist: true,
      // 判断是否选择全部常用语
      b: false,
      arr: [
        {
          advice: '已阅',
          date: '2018/08/21',
          // 是否要选择此条常用语
          choice: false
        }, {
          advice: '请修改',
          date: '2018/08/21',
          choice: false
        }, {
          advice: '已阅',
          date: '2018/08/21',
          choice: false
        }, {
          advice: '请修改',
          date: '2018/08/21',
          choice: false
        }
      ]
    }
  },
  // mounted() {
  //   this.arr.push({
  //     advice: this.infos,
  //     date: '2018',
  //     choice: false
  //   })
  // },
  // computed: {
  //   ...mapState(['infos'])
  // },
  components: {
    tInput
  },
  methods: {
    add() {
      this.$router.push('/base/settings/my')
    },
    all() {
      this.b = !this.b
      this.arr.forEach((item) => {
        item.choice = this.b
      })
    },
    leftClick() {
      var rpcArr = []
      rpcArr = this.arr.filter(item => {
        return item.choice === true
      })
      console.log(rpcArr)
      this.$dialog({
        msg: '确定要删除吗',
        okButton: '确认',
        cancelButton: '取消'
      })
    },
    click(e) {
      e.choice = !e.choice
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.big{
  font-size: .36rem;
}
.add{
  display: inline-block;
  margin: .21rem .38rem .33rem 0;
  font-size: .32rem;
  font-weight: 500;
}
.fotter,.select {
  display: flex;
  align-items: center;
}
.fotter {
  margin-top: 0.08rem;
  width: 7.5rem;
  height: 1rem;
  justify-content: space-between;
  background: white;
}
.select {
  flex-direction: row;
  .mycricle {
    margin: 0.36rem 0.29rem 0.36rem 0.3rem;
    width: 0.28rem;
    height: 0.28rem;
    border: 0.01rem solid rgba(204, 204, 204, 1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: inline-block;
    margin: 0.35rem 0 0.34rem 0;
    font-size: 0.32rem;
    color: #333;
  }
}
.del {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  background: #d70008;
  color: rgba(255, 255, 255, 1);
  font-size: 0.34rem;
  font-weight: bold;
  text-align: center;
  font-family: PingFang-SC-Bold;
}
.colors{
  display: block;
  width: .18rem;
  height: .18rem;
  border-radius: 50%;
  background: red;
}
</style>

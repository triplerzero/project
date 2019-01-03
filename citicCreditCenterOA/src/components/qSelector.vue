<!-- 费用报销列表组件 -->
<template>
  <div>
    <div class="header">
      <div class="none" @click="click()">
        <img src="@/assets/details/椭圆 541.png" v-if="state">
      </div>
      <span>{{ title }}</span>
    </div>
    <div class="main" @click="myclick()">
      <div class="img">
        <img src="@/assets/details/付款.png">
      </div>
      <div class="text">
        <div>
          <div>{{ name }}</div>
          <div>{{ date }}</div>
        </div>
        <span>￥{{ price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    //选择状态
    state: {
      type: Boolean,
      default: false
    },
    //标题
    title: {
      type: String,
      default: ""
    },
    //名称
    name: {
      type: String,
      default: ""
    },
    //日期
    date: {
      type: String,
      default: ""
    },
    //价格
    price: {
      type: String,
      default: ""
    }
  },
  methods: {
    click() {
      this.$emit("clicks")
    },
    myclick() {
      this.$emit("click")
    },
    goTo(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  align-items: center;
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
span {
    margin-left: 0.14rem;
    font-size: 0.32rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
.main {
  width: 6.88rem;
  height: 1.8rem;
  right: 0%;
  display: flex;
  align-items: center;
  background: white;
  margin-left: 0.62rem;
  img {
    width: 0.94rem;
    height: 0.94rem;
    margin-left: 0.54rem;
    margin-right: 0.39rem;
  }
  .text {
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    width: 5.9rem;
    display: flex;
    justify-content: space-between;
    div {
      div:nth-child(1) {
        color: #333333;
        margin-bottom: 0.24rem;
      }
      div:nth-child(2) {
        color: #999999;
      }
    }
    span {
      color: #ff6666;
      margin-right: 0.28rem;
    }
  }
}
</style>

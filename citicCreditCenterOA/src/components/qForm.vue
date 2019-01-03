<!-- 表单信息组件 -->
<template>
  <div class="form">
    <div>
      <img src="@a/main/表单.png" alt>
      <span>表单信息</span>
    </div>
    <div>
      <div v-for="(item, index) in items" :key="index">
        <span class="rowtitle"> {{ item.title }} </span>
        <span :class="Rowdata(item.state)"> {{ item.content }} </span>
      </div>
    </div>
  </div>
</template>
<script>
//表单信息类
class Item {
  constructor(title, content, state) {
    this.title = title
    this.content = content
    this.state = state
  }
}

export default {
  props: {
    //表单信息数组
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  Item,
  methods: {
    //根据表单信息状态返回css类
    Rowdata(state) {
      if (state) {
        return "rowdata2"
      } else return "rowdata1"
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  width: 6.9rem;
  margin: 0 auto;
  padding-top: 0.08rem;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    width: 6.9rem;
    height: 0.79rem;
    background: rgba(250, 250, 250, 1);
    font-size: 0.3rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    span {
      margin-left: .26rem;
    }
    img{
      width:.34rem;
      height:.36rem;
      margin-left:.38rem;
    }
  }
  > div:nth-child(2) {
    div {
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.7rem;
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      .rowtitle {
        color: rgba(153, 153, 153, 1);
        margin-left: 0.38rem;
      }
      .rowdata1 {
        color: rgba(51, 51, 51, 1);
        margin-right: 0.4rem;
      }
      .rowdata2 {
        color: #ff6666;
        margin-right: 0.4rem;
      }
    }
  }
  &::after {
    content: " ";
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #ecedf0;
    position: absolute;
    top: 7.4%;
    left: 2.5%;
  }
  &::before {
    content: " ";
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #ecedf0;
    position: absolute;
    top: 7.4%;
    right: 2.5%;
  }
}
</style>

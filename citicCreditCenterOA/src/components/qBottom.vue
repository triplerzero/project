<template>
  <div class="bottom">
    <div class="InputField"><input type="text" placeholder="你的意见" /></div>
    <div class="buttons">
      <div @click="pass()">
        <div class="icon citicFont citic-dui"></div>
        <span>通过</span>
      </div>
      <div @click="back()">
        <div class="icon citicFont citic-cuo"></div>
        <span>驳回</span>
      </div>
      <div @click="turn()">
        <div class="icon citicFont citic-zhuanban"></div>
        <span>转办</span>
      </div>
      <div @click="sign()">
        <div class="icon citicFont citic-huiqian"></div>
        <span>会签</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pass() {
      this.$emit('pass')
    },
    back() {
      this.$emit('back')
    },
    turn() {
      this.$emit('turn')
    },
    sign() {
      this.$emit('sign')
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom {
  background: white;
  .InputField {
    display: flex;
    align-items: center;
    position: relative;
    width: 7.5rem;
    height: 1rem;
    input {
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      width: 5rem;
      margin-left: 0.3rem;
    }
    &::after {
      content: " ";
      height: 1px;
      width: 6.9rem;
      background: #dddddd;
      position: absolute;
      top: 97%;
      left: 4%;
    }
  }
  .buttons {
    height: 0.99rem;
    width: 7.5rem;
    display: flex;
    align-items: center;
    > div {
      width: 1.875rem;
      height: 1rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 0.24rem;
      }
      span {
        margin-left: 0.13rem;
      }
    }
  }
}
</style>

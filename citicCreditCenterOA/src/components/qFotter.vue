<template>
  <div class="bottom">
    <div class="first-bottom">
      <div class="none" @click="allChoose()">
        <img src="@/assets/details/椭圆 541.png" v-if="selected1">
      </div>
      <span>{{ all }}</span>
    </div>
    <div>{{ disagree }}</div>
    <div>{{ pass }}</div>
  </div>
</template>

<script>
export default {
  props: {
    selected1: {
      type: Boolean,
      default: false
    },
    all: {
      type: String,
      default: ''
    },
    disagree: {
      type: String,
      default: ''
    },
    pass: {
      type: String,
      default: ''
    }
  },
  methods: {
    allChoose() {
      this.$emit('all')
    }
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
  img{
    width: 0.34rem;
    height: 0.34rem;
  }
}
</style>

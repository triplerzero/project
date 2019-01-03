<template>
  <div class="classify">
    <span><slot></slot></span>
    <i :class="iconClass" @click="click()"></i>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: "citicFont citic-xingzhuangkaobei2"
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.classify {
  height: 1rem;
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-bottom:1px;
  span {
    margin-left: 0.31rem;
    font-size: 0.32rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  i{
   margin-right: 0.31rem;
   color: #CCCCCC;
  }
}
</style>

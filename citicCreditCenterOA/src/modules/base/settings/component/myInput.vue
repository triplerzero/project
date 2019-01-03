<template>
  <div class="advice">
    <div class="one">
      <div class="cricle" @click="change()">
        <span :class="{'colors': value}"></span>
      </div>
      <span class="content">{{ youradvice }}</span>
    </div>
    <div>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    youradvice: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    change() {
      this.$emit('clickHandler')
    }
  }
}
</script>

<style lang="scss" scoped>
.advice:first-of-type {
  margin-top: 0.18rem;
}
.advice:last-of-type {
  border-bottom: none;
}
.advice,.one{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.advice {
  width: 7.5rem;
  height: 1rem;
  justify-content: space-between;
  flex-wrap: nowrap;
  background: #fff;
  border-bottom: 0.01rem solid #dddddd;
}
.one {
  justify-content: flex-start;
  .cricle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.36rem 0.29rem 0.36rem 0.3rem;
    width: 0.28rem;
    height: 0.28rem;
    border: 0.01rem solid rgba(204, 204, 204, 1);
    border-radius: 50%;
  }
  .content {
    display: inline-block;
    margin: 0.35rem 0 0.34rem 0;
    font-size: 0.32rem;
    color: #333;
  }
}
.date {
  display: inline-block;
  margin: 0.39rem 0.32rem 0.35rem 0;
  width: 1.56rem;
  font-size: 0.28rem;
  color: #999;
}
.colors{
  display: block;
  width: .18rem;
  height: .18rem;
  border-radius: 50%;
  background: red;
}
</style>

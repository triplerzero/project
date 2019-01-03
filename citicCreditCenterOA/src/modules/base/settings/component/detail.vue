<template>
  <div class="detail">
    <span class="star">{{ name }}</span>
    <div class="myRight">
      <slot></slot>
      <div class="pic">
        <img :src="imgsrc" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    imgsrc: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.detail:first-of-type {
  margin-top: 0.18rem;
}
.detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 7.5rem;
  height: 1rem;
  background: #fff;
  border-bottom: 0.01rem solid #dddddd;
  box-sizing:border-box;
  .star {
    display: inline-block;
    margin: 0.34rem 0 0.35rem 0.31rem;
    color: #999;
    font-size: 0.32rem;
  }
}
.myRight {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .pic {
    margin: 0.34rem 0.32rem 0.35rem 0;
    width: 0.2rem;
    height: 0.32rem;
    img {
      width: 100%;
    }
  }
}
</style>

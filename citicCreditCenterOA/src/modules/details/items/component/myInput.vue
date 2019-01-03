<template>
  <div class="content">
    <div class="wrap">
      <div class="lists">
        <div class="left">{{ left }}</div>
        <div class="right">{{ right }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      default: ""
    },
    right: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: rgba(255, 255, 255, 1);
  width: 7.5rem;
  height: auto;
}
.wrap {
  width: 6.9rem;
  height: auto;
  margin: 0 auto;
}
.lists {
  display: flex;
  width: 6.9rem;
  border-bottom: 0.01rem solid rgba(234, 234, 234, 1);
  padding: 0.32rem 0;
  > .left {
    flex: 1;
    font-size: 0.32rem;
    color: #999999;
    font-weight: 500
  }
  > .right {
    max-width: 5.12rem;
    font-size: 0.32rem;
    color: #333333;
  }
}
</style>

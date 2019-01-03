<template>
  <div class="con">
    <div class="info">
      <img :src="imgsrc" alt />
      <div class="people">{{ name }}</div>
      <span>{{ classify }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    imgsrc: {
      type: String,
      default: ""
    },
    cla: {
      type: String,
      default: ""
    },
    classify: {
      type: String,
      default: ""
    }
  },
  methods: {
    Excute() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
.con {
  width: 7.5rem;
  background: rgba(255, 255, 255, 1);
  > .info {
    width: 7.5rem;
    height: 1.2rem;
    display: flex;
    border-bottom: 1px solid #ecedf0;
    margin-bottom: 1px;
    padding: 0.36rem 0.3rem 0.36rem 0.38rem;
    box-sizing: border-box;
    img {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.3rem;
    }
    > .people {
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      overflow: hidden;
    }
    > span {
      display: inline-block;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.28rem;
      color: rgba(33, 137, 255, 1);
      margin-left: 1.07rem;
      flex: 1;
    }
    > .slide {
      width: 0.8rem;
      hieght: 0.4rem;
      background: #bb0f04;
      border: 2px solid rgba(221, 221, 221, 1);
      border-radius: 0.2rem;
      position: relative;
      margin-left: 1rem;
      > span {
        width: 0.36rem;
        height: 0.36rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 0.18rem;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .slidefix {
      width: 0.8rem;
      hieght: 0.4rem;
      background: rgba(255, 255, 255, 1);
      border: 2px solid rgba(221, 221, 221, 1);
      border-radius: 0.2rem;
      position: relative;
      margin-left: 1rem;
      > span {
        width: 0.36rem;
        height: 0.36rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 0.18rem;
        position: absolute;
        top: 0;
        right: left;
      }
    }
  }
}
</style>

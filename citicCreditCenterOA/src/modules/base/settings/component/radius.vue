<template>
  <div class="content">
    <div class="one">
      <div class="chose-item">{{ name1 }}</div>
      <div class="chose-item">
        <div class="chose" @click="Excute1()"><span class="selected" v-if="active1"></span></div>
        <label>{{ name2 }}</label>
      </div>
      <div class="chose-item">
        <div class="chose" @click="Excute2()"><span class="selected" v-if="active2"></span></div>
        <label>{{ name3 }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name1: {
      type: String,
      default: ""
    },
    name2: {
      type: String,
      default: ""
    },
    name3: {
      type: String,
      default: ""
    },
    active1: {
      type: Boolean,
      default: false
    },
    active2: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    Excute1() {
      if (!this.active1) {
        this.active1 = true
        this.active2 = false
        this.$emit('show1')
      }
    },
    Excute2() {
      if (!this.active2) {
        this.active2 = true
        this.active1 = false
        this.$emit('show2')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content:first-child {
  margin-top: 0.18rem;
}
.one {
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding-left: 0.28rem;
  box-sizing: border-box;
  border-bottom:0.01rem solid #f1f1f1;
  display: flex;
  > span {
    margin-right: 0.72rem;
  }
  > .chose-item {
    flex: 1;
    display: flex;
  }
}
.chose {
  width: 0.28rem;
  height: 0.28rem;
  border: 0.01rem solid rgba(204, 204, 204, 1);
  // box-sizing: border-box;
  margin-right: 0.3rem;
  margin-top: 0.36rem;
  border-radius: 50%;
  position:relative;
  > span {
    width: 0.18rem;
    height: 0.18rem;
    background: #d70008;
    border-radius: 50%;
    position:absolute;
    top:50%;
    margin-top:-0.09rem;
    left:50%;
    margin-left:-0.09rem;
  }
}
</style>

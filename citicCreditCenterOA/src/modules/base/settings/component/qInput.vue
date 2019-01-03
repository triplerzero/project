<template>
  <div :class="position">
    <i class="citicFont citic-sousuo"></i>
    <input :type="type" :placeholder="placeholder" v-model="inputContent">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    position: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      inputContent: ""
    }
  },
  watch: {
    inputContent(e) {
      this.$emit("input", e)
    }
  },
}
</script>

<style lang="scss" scoped>
.left {
  i {
    font-size: 0.4rem;
    margin-left: 0.25rem;
    margin-right: 0.23rem;
  }
  display: flex;
  align-items: center;
  width: 6.9rem;
  height: 0.8rem;
  margin: 0.18rem auto;
  color: #999999;
  background: white;
  border-radius: 0.1rem;
  input {
    font-size: 0.32rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
  }
}
.middle {
  @extend .left;
  justify-content: center;
}
.right {
  @extend .left;
  justify-content: right;
}
</style>

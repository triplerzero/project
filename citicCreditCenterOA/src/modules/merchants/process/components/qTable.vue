<template>
  <div :class="Setclass">
    <div>
      <span>  {{ begin }}  </span>
    </div>
    <div>
      <span>
        <slot></slot>
      </span>
    </div>
    <div>
      <span>  {{ end }}  </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    begin: {
      type: String,
      default: ''
    },
    end: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    }
  },
  computed: {
    Setclass() {
      switch (this.type) {
      case 1:
        return "table1"
      case 2:
        return "table2"
      case 3:
        return "table3"
      default:
        return "table2"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #ffffff;
$gray: #fafafa;
@mixin normal() {
  display: flex;
  justify-content: center;
  height: 1rem;
  align-items: center;
  border: 0.01rem solid rgba(234, 234, 234, 1);
}
.table1 {
  height: 1rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 0.28rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;

  div:nth-child(1) {
    @include normal();
    width: 1.98rem;
  }
  div:nth-child(2) {
    @include normal();
    width: 7.5rem-1.98rem-2.17rem;
  }
  div:nth-child(3) {
    @include normal();
    width: 2.17rem;
  }
}
.table2 {
  @extend .table1;
  color: black;
  background: $gray;
}
.table3 {
  @extend .table2;
  background: $white;
}
</style>

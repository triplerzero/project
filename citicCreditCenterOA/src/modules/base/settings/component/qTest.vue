<template>
  <div class="total">
    <div class="choose" @click="choose()">
      <i class="citicFont citic-dui" v-if="state"></i>
    </div>
    <div class="main">
      <div>
        <div>{{ proName }}</div>
        <div>
          <span>公文</span>
          <span>{{ version }}</span>
        </div>
      </div>
      <span class="test" @click="click()">测试</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      default: '版本01'
    },
    proName: {
      type: String,
      default: ''
    },
    state: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    choose() {
      this.$emit('select')
    },
    click() {
      this.$emit('click')
    }
  }

}
</script>

<style lang="scss" scoped>
.total {
  background: white;
  height: 1.6rem;
  width: 7.5rem;
  display: flex;
  margin-bottom: 1px;
  .choose {
    width:0.3rem;
    height:0.3rem;
    border:1px solid rgba(204,204,204,1);
    border-radius:0.04rem;;
    margin-left:0.26rem;
    margin-top:0.34rem;
    position: relative;
  i {
    font-size: .2rem;
    color: #D70008;
    position:absolute;
    top:0%;
    left:-6%;
    }
  }
  .main {
    width: 6.8rem;
    display: flex;
    justify-content: space-between;
    margin-left:0.26rem;
    margin-top:0.25rem;
    div:first-child {
      div:nth-child(1) {
        font-size: 0.32rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 0.17rem;
      }
      div:nth-child(2) {
        display: flex;
        align-items: center;
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        span:nth-child(1) {
          width: 0.8rem;
          height: 0.4rem;
          border: 1px solid rgba(33, 137, 255, 1);
          border-radius: 0.1rem;
          color: rgba(33, 137, 255, 1);
          text-align: center;
        }
        span:nth-child(2) {
          color: rgba(153, 153, 153, 1);
          text-align: center;
          margin-left:.17rem;
        }
      }
    }
    .test {
      font-size: 0.32rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(255, 102, 102, 1);
      margin-right: 0.3rem;
    }
  }
}
</style>

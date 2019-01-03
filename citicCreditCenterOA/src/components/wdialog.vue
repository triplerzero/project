<!-- @param title [string] 标题-->
<!-- @param content [string] 提示内容-->
<template>
  <div class="wrap">
    <transition enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOutDownBig"
                :duration="{ enter: 100, leave: 800 }"
    >
      <div class="hide" @click="onhide" v-if="value"></div>
    </transition>
    <transition enter-active-class="animated bounceInDown"
                leave-active-class="animated fadeOutUpBig"
                :duration="{ enter: 1000, leave: 850 }"
    >
      <div class="dialog" v-if="value">
        <div>
          <div class="top">
            <div class="img"><img :src="imgs" alt="" v-if="imgs!=''"></div>
            <div class="title">{{ title }}</div>
          </div>
          <div class="center">{{ content }}</div>
          <div class="bottom">
            <div class="inputs"><slot name="input"></slot></div>
            <div v-for="(item,index) in btns" :key="index" class="horize">
              <div v-for="(v,i) in item" :key="i" class="two">{{ btnsContent(v) }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '内容内容内容内容'
    },
    btns: {
      type: Array,
      default() {
        // return [['确定', '确定'], ['确定'], ['确定', '确定']]
        return [[{info: '确定'}], [{info: '辅助操作'}, {info: '主操作'}], [{info: '确定'}]]
      }
    },
    imgs: {
      type: String,
      default: ''
    }
  },
  methods: {
    onhide() {
      this.$emit('input', false)
    },
    btnsContent(i) {
      if (typeof i == 'string') return i
      else if (typeof i == 'object') return i.info
    }
  },
}
</script>

<style lang="scss">
.wrap{
  .hide{
    height: 100%;
    width: 7.5rem;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, .5);
  }
}
.dialog{
  width: 5.6rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 1rem;
  margin: auto;
  background:#fff;
  border:1px solid rgba(241,241,241,1);
  box-shadow:0px 8px 18px 2px rgba(153,153,153,0.2);
  border-radius:4px;
  font-size: .32rem;
  z-index: 2;
  > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.top{
  .title{
    margin-top: .52rem;
    margin-bottom: .31rem;
    font-weight: bold;
    text-align: center;
  }
  .img{
    img{
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      margin: .66rem auto .48rem;
    }
  }
}
.center{
  width: 3.9rem;
  font-size: .28rem;
  text-align: center;
  margin-bottom: .4rem;
}
.bottom{
  width: 100%;
  .horize{
    display: flex;
    align-items: center;
    flex-direction: row;
    height: .8rem;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
    color: #0096FF;
    .two:nth-last-of-type(2):first-of-type{
      width: 50%;
      color: #999;
      height: .8rem;
      line-height: .8rem;
    }
  }
  .horize::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    transform: scaleY(.5);
  }
  .inputs{
    input{
      display: block;
      width: 5rem;
      margin: 0 auto .35rem;
      line-height: .8rem;
      padding-left: .18rem;
      box-sizing: border-box;
      background:rgba(250,250,250,1);
      border:1px solid rgba(221,221,221,1);
      border-radius:1px;
    }
  }
}
</style>

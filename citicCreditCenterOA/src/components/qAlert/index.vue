<template>
  <div class="qAlert-total" v-if="display">
    <transition
      enter-active-class="faster animated fadeIn"
      leave-active-class="faster animated fadeOut"
    >
      <div :class="qAlertBody" @click="cancel()" v-if="isShow"></div>
    </transition>
    <transition
      enter-active-class="faster animated bounceInDown"
      leave-active-class="faster animated bounceOutUp"
      @enter="applyInput()"
      @afterLeave="removeDialog()"
    >
      <div class="alert" v-if="isShow">
        <slot name="img"></slot>
        <img :src="imgSrc" v-if="imgSrc!=''">
        <div class="title" v-if="title!=''">{{ title }}</div>
        <div class="alert-content" v-if="title!=''">
          <span>{{ content }}</span>
          <input v-if="inputPlace!=null" v-model="input">
          <slot></slot>
        </div>
        <div class="alert-content" v-if="title==''" style="padding-top: 0.63rem">
          <span>{{ content }}</span>
          <input v-if="inputPlace!=null" v-model="input">
          <slot></slot>
        </div>
        <div>
          <div class="alert-button" v-for="(arr,index) in btnsContent" :key="index">
            <div
              class="alert-button-horizontal"
              v-for="(item,num) in arr"
              :key="num"
              v-if="num<2"
              @click="btnsClick(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      isShow: false,
      display: false,
      qAlertBody: 'qAlert-body'
    }
  },
  props: {
    btns: {
      type: Array,
      default() {
        return [
          {
            name: "确定",
          }
        ]
      }
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    inputPlace: {
      type: Object,
      default() {
        return null
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.input = ''
    if (document.getElementsByClassName('qAlert-total').length > 0) {
      this.qAlertBody = 'qAlert-body-transparent'
    }
  },
  watch: {
    value(e) {
      if (e) {
        this.display = true
        setTimeout(()=>{ this.isShow = true }, 1)
      } else if (!e && this.isShow) {
        this.cancel()
      }
    },
  },
  propsData: {},
  computed: {
    btnsContent() {
      return this.btns.map(item => {
        if (typeof item == "string") {
          return [{ name: item }]
        } else if (typeof item == "object") {
          if (item.length > 1) {
            return item.map(i => (typeof i == "string" ? { name: i } : i))
          }
          return [item]
        }
      })
    },
  },
  methods: {
    //默认按钮功能为取消弹框
    btnsClick(item) {
      item.input = this.input
      this.$emit('result', item)
    },
    //把参数应用到input标签上
    applyInput() {
      let allInput = this.$el.getElementsByTagName("input")
      // console.log(allInput)
      if (this.inputPlace != null) {
        for (let i of allInput) {
          let k = Object.assign(i, this.inputPlace)
          i = k
        }
      }
    },
    cancel() {
      this.isShow = false
    },
    removeDialog() {
      this.value = false
      this.display = false
      this.$emit('input', this.display)
    },
    getInputContent(method) {
      return method(this.input)
    },
  }
}
</script>

<style lang="scss">
$width: 5.6rem;
@mixin buttonFont() {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
}
.qAlert-total {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
}

.qAlert-body {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
}

.qAlert-body-transparent {
  @extend .qAlert-body;
  background: rgba(255, 255, 255, 0);
}
.alert {
  background: rgba(252, 252, 252, 1);
  width: $width;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 25;
  .title {
    font-size: 0.32rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 0.52rem;
  }
  img {
    margin-top: 0.66rem;
  }
  .alert-content {
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    padding: 0.45rem 0.85rem;
    line-height: 0.52rem;
    input {
      width: 5rem;
      height: 0.8rem;
      background: rgba(250, 250, 250, 1);
      border: 1px solid rgba(221, 221, 221, 1);
      border-radius: 1px;
      margin-top: 0.35rem;
    }
  }
}
.alert-button {
  @include buttonFont();
  width: $width;
  padding: 0.16rem 0;
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert-button-horizontal:nth-last-child(2):first-child {
    color: #999999;
    padding-right: 0.74rem;
  }
  .alert-button-horizontal:nth-last-child(2):first-child
    ~ .alert-button-horizontal {
    color: #0096ff;
    padding-left: 0.74rem;
  }
  .alert-button-horizontal:nth-last-child(1):first-child {
    color: #0096ff;
    padding: 0 0.74rem;
  }
}

.alert-button:nth-last-child(2):first-child {
  @extend .alert-button;
  border-top: none;
  padding-top: 0;
}
</style>

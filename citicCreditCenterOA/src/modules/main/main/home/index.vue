<template>
  <t-page>
    <transition
      :enter-active-class="goback ? 'faster animated slideInLeft' : 'faster animated slideInRight'"
      :leave-active-class="goback ? 'faster animated slideOutRight' : 'faster animated slideOutLeft'"
    >
      <router-view></router-view>
    </transition>
    <div slot="bottom" class="footer">
      <div class="item" :class="{'fs': footerNumber == 0}" @click="$router.push({path: '/main/office/office', query: {a:1}})">
        <div class="citicFont citic-tuoyuankaobei"></div>
        <div class="msg">办公</div>
      </div>
      <div class="item" :class="{'fs': footerNumber == 1}" @click="$router.push('/main/book/book')">
        <div class="citicFont citic-xingzhuangkaobei1"></div>
        <div class="msg">通讯录</div>
      </div>
      <div class="item" :class="{'fs': footerNumber == 2}" @click="$router.push('/main/mine/mine')">
        <div class="citicFont citic-xingzhuangkaobei"></div>
        <div class="msg">我的</div>
      </div>
    </div>
  </t-page>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      goback: false,
      footerSelected: 0
    }
  },
  computed: {
    footerNumber() {
      var number
      switch (this.$route.params.path) {
      case 'office':
        number = 0
        break
      case 'book':
        number = 1
        break
      case 'mine':
        number = 2
        break
      }
      return number
    }
  },
  mounted() {
    this.getLv1()
  },
  methods: {
    ...mapActions(['getLv1'])
  },
  watch: {
    footerNumber(newValue, oldValue) {
      let cha = oldValue - newValue
      if (cha < 0) {
        this.goback = false
      } else if (cha > 0) {
        this.goback = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.fs{
  color: #bb0f04 !important;
}
.footer{
  height: .96rem;
  display: flex;
  justify-content: space-between;
  padding: 0px .88rem;
  background-color: white;
  align-items: center;
  border-top:1px solid rgba(221,221,221,1);
  >.item{
    text-align: center;
    color: #999;
    >.iconfont{
      font-size: .42rem;
    }
    >.msg{
      font-size: .22rem;
    }
  }
}
</style>

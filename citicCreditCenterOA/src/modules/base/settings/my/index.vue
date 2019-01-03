<!-- 个人常用语页面 -->
<template>
  <t-page>
    <t-header slot="top">
      <div class="big">个人常用语</div>
      <div slot="right">
        <span class="submit" @click="leftClick()">提交</span>
      </div>
    </t-header>
    <div class="box">
      <div class="my">
        <div class="lang">常用语</div>
        <div class="help"><img src="@/assets/main/形状 507.png" alt=""></div>
      </div>
      <div class="inputs">
        <div class="write">
          <i class="citicFont citic-huiqian"></i>
          <textarea name="" id="" cols="" rows="" placeholder="请输入个人常用语...." v-model="info"></textarea>
        </div>
        <div class="two">
          <div class="red">
            <span v-show="show">输入字数不能超过200个</span>
          </div>
          <span class="right">{{ num }}/200</span>
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
// import {mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      // 输入的常用语内容
      info: '',
      // 输入常用语的字数
      num: 0,
      // 常用语字数是否超过200
      show: false
    }
  },
  watch: {
    /**
     * @function 对常用语内容的字数限制
     */
    info() {
      var a = this.info.length
      this.num = a++
      if (a > 200) {
        this.show = true
        this.info = this.info.slice(0, 200)
      } else {
        this.show = false
      }
    }
  },
  // computed: {
  //   ...mapState(['infos'])
  // },
  methods: {
    /**
     * @function 判断常用语内容是否为空或是否超出限制的字数
     */
    leftClick() {
      if (this.info == '') {
        this.$dialog({
          msg: '请输入内容',
          okButton: '确认'
        })
      } else {
        this.$dialog({
          msg: '输入字数不能超过200个',
          okButton: '确认'
        })
      }
      // this.setInfos(this.info)
      // this.$router.push('/base/settings/phrase')
    },
    // ...mapMutations(['setInfos'])
  }
}
</script>
<style lang="scss" scoped>
@import '@s/mixin';
.big{
  font-size: .36rem;
}
.submit{
  display: inline-block;
  font-size: .32rem;
  font-weight: 500;
  margin: .21rem .3rem .33rem 0;
}
.box{
  background: #fff;
  width:7.5rem;
  height: 2.6rem;
}
.my {
  margin-top: .18rem;
  @include flex;
  color: #333;
  font-size: .32rem;
  .lang {
    margin: .34rem 0 0 .32rem;
  }
  .help{
    width: .3rem;
    height: .3rem;
    margin: .34rem .27rem 0 0;
    img{
      width: 100%;
    }
  }
}
.inputs{
  margin-top: .17rem;
  textarea{
  width: 6.44rem;
  margin-left: .13rem;
  margin-top: .02rem;
  font-size: .28rem;
}
.write{
  display: flex;
  padding-left: .34rem;
}
.two{
  @include flex;
  padding: 0 .29rem 0 .34rem;
  .red{
    color: red;
  }
  .right{
    margin-bottom: 02rem;
    font-size: .28rem;
    color: #ccc;
  }
}
}
.citicFont{
  margin-top: -2px;
}
</style>

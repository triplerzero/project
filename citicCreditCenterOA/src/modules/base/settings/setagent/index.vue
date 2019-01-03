<template>
  <t-page>
    <t-header slot="top">
      <div>设置代理人</div>
      <t-header-right slot="right">
        <div class="right" @click="goPage('/base/settings/addagent')"> 添加 </div>
      </t-header-right>
    </t-header>
    <div class="setagent">
      <t-cell v-for="(item, index) in arr" :key="index">
        <div slot="left" class="left" @click="goTo(item)">
          <i class="citicFont citic-dailiren icon"></i>
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="right2">
          <div class="info">{{ item.info }}</div>
          <t-switch v-model="item.choice"></t-switch>
        </div>
      </t-cell>
    </div>
  </t-page>
</template>
<script>
import {tSwitch} from 'team-ui'
export default {
  data() {
    return {
      cla: 'slidefix',
      id: '',
      arr: [
        {
          name: '李丽华',
          info: '全部授权',
          choice: true
        }, {
          name: '程利的',
          info: '部分授权',
          choice: false
        }, {
          name: '李丽华',
          info: '全部授权',
          choice: false
        }, {
          name: '程利的',
          info: '部分授权',
          choice: false
        }, {
          name: '李丽华',
          info: '全部授权',
          choice: false
        }, {
          name: '程利的',
          info: '部分授权',
          choice: false
        }, {
          name: '李丽华',
          info: '全部授权',
          choice: false
        }, {
          name: '程利的',
          info: '部分授权',
          choice: false
        }
      ]
    }
  },
  components: {
    tSwitch
  },
  methods: {
    onClick() {
      if (this.cla == 'slide') {
        this.cla = 'slidefix'
      } else {
        this.cla = 'slide'
      }
    },
    goPage(e) {
      this.$router.push(e)
    },
    goTo(item) {
      console.log(item)
      this.$router.push({
        path: '/base/settings/agent',
        query: item
      })
    }
  }
}
</script>
<style>
.setagent .T_cell_body{
  margin-left: 0;
}
</style>

<style lang="scss" scoped>
.left{
  width: 2.12rem;
  display: flex;
  align-items: center;
  margin-left: .38rem;
}
.title{
  font-size: .32rem;
}
.right2{
  display: flex;
  justify-content: space-between;
  width: 4.31rem;
  align-items: center;
  margin-left: 0.68rem;
}
.info{
  font-size: .28rem;
  color: #2189FF;
}
.icon{
  color: #78a8dc;
  font-size: .5rem;
  margin-right: .3rem;
}
.setagent {
  margin-top: 0.2rem;
}
.right {
  height: 0.88rem;
  line-height: 0.88rem;
}
</style>

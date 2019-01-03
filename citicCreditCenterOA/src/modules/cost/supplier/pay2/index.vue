<template>
  <t-page>
    <t-header slot="top" class="header">供应商付款</t-header>
    <div class="main">
      <q-form :items="items"></q-form>
      <div class="box1" v-if="msg1">
        <t-cell class="cell" is-link>
          <div slot="left" class="left">流程跟踪</div>
          <div class="right">点击查看</div>
        </t-cell>
      </div>
      <div class="box2" v-if="msg2">
        <div>这里是我的意见这里是我的意见这里是我的意见这里是我的意见......</div>
        <div class="icon citicFont citic-xingzhuang10"></div>
      </div>
    </div>
    <t-bottom slot="bottom">
      <q-bottom v-if="selectedPeople.length==0"
                @sign="$router.push('/cost/financial/selected')"
                @pass="leftClicks()"
                @back="leftClick()"
                @turn="yourClick()"
      >
      </q-bottom>
      <transition leave-active-class="faster animated slideOutDown">
        <div class="result" v-if="selectedPeople.length>0">
          <div class="top">
            <span>已选代理人</span>
            <span @click="$router.push('/cost/financial/selected')">添加代理人</span>
          </div>
          <div class="center">
            <div class="list" v-for="(item,index) in selectedPeople" :key="index">
              <div class="name">{{ item.name }}</div>
              <div class="icon citicFont citic-cuo" @click="del(item)"></div>
            </div>
          </div>
          <div class="footer">
            <div>提交</div>
          </div>
        </div>
      </transition>
    </t-bottom>
  </t-page>
</template>

<script>
import qForm from "@/components/qForm.vue"
import qBottom from "@/components/qBottom.vue"
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      msg1: true,
      msg2: true,
      res: true,
      items: [
        new qForm.Item("单据编号", "YH98127322331131", false),
        new qForm.Item("标题", "11-1281", false),
        new qForm.Item("申请人", "孙维", false),
        new qForm.Item("所属部门", "财务审批部门", false),
        new qForm.Item("供应商名称", "深圳市兰陵股份有限公司", false),
        new qForm.Item("付款金额合计", "8000.00", true)
      ]
    }
  },
  mounted() {
    // console.log(this.selectedPeople)
  },
  computed: {
    ...mapState(["selectedPeople"])
  },
  methods: {
    ...mapMutations(["setPeople"]),
    del(item) {
      let arr = this.selectedPeople.filter(i => i.id != item.id)
      this.setPeople(arr)
    },
    leftClicks() {
      this.$dialog({
        msg: '确定通过吗',
        okButton: '确认',
        cancelButton: '取消'
      })
    },
    leftClick() {
      this.$dialog({
        msg: '确定要驳回吗',
        okButton: '确认',
        cancelButton: '取消'
      })
    },
    yourClick() {
      this.$dialog({
        msg: '确定要转办吗',
        okButton: '确认',
        cancelButton: '取消'
      })
    }
  },
  components: { qForm, qBottom }
}
</script>

<style lang="scss" scoped>
.main {
  background: #ecedf0;
  height: 100%;
}
.box1,
.box2 {
  width: 6.9rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.2rem;
}
.box1 {
  height: 1rem;
  .left {
    margin-left: 0.08rem;
  }
  .right {
    font-size: 0.28rem;
  }
}
.box2 {
  padding: 0.3rem 0.4rem 0.3rem 0.38rem;
  box-sizing: border-box;
  color: #999999;
  font-size: 0.28rem;
  div:nth-child(2) {
    text-align: right;
    padding-top: 0.2rem;
  }
}
.result {
  width: 7.5rem;
  height: 5.04rem;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  bottom:0;
  box-shadow: 0 0.17rem 0.18rem 0.02rem rgba(153, 153, 153, 0.2);
  > .top {
    width: 6.9rem;
    margin: 0 auto;
    height: 1rem;
    border-bottom: 0.01rem solid #f6f6f6;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    span {
      flex: 1;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      font-size: 0.32rem;
    }
    span:nth-child(2) {
      text-align: right;
    }
  }
  > .center {
    width: 6.9rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .list {
      margin-top: 0.31rem;
      width: 2rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      border: 0.01rem solid rgba(215, 0, 8, 1);
      box-sizing: border-box;
      align-items: center;
      display: flex;
      margin-right: 0.4rem;
      div {
        color: #d70008;
        font-weight: 500;
      }
      .name {
        margin-left: 0.41rem;
        margin-right: 0.25rem;
        font-size: 0.28rem;
      }
      > .icon {
        font-size: 0.21rem;
      }
    }
    .list:nth-child(3n) {
      margin-right: 0;
    }
  }
  > .footer {
    width: 7.5rem;
    padding: 0.21rem 0;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    > div {
      width: 6.9rem;
      margin: 0 auto;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      color: rgba(255, 255, 255, 1);
      font-size: 0.36rem;
      font-weight: bold;
      background: #d70008;
      border-radius: 0.5rem;
    }
  }
}
</style>




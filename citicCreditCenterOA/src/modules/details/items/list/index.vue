<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">中信银行部门发文审批件</t-header>
    <div>
      <div class="list">
        <div class="item" @click="goPage('/details/items/affix')">
          <div class="icon citicFont citic-zhengwenjifujian one"></div>
          <div>正文及附件</div>
        </div>
        <div class="item" @click="goPage('/details/process/option')">
          <div class="icon citicFont citic-yijianfankui two"></div>
          <div>审批意见</div>
        </div>
        <div class="item" @click="goPage('/details/process/process')">
          <div class="icon citicFont citic-liuchenggenzong three"></div>
          <div>流程跟踪</div>
        </div>
      </div>
      <div class="main">
        <t-input left="标题" right="关于深圳中信卡中心财务部门的相关审批件请示"></t-input>
        <t-input left="缓急程度" right="无"></t-input>
        <t-input left="文号" right="281793794202093dik20d23423"></t-input>
        <t-input left="摘要"></t-input>
        <div class="add">要和正文中选取出来的,是对表述论文的中心内容有实质意义的词汇.关键词是用作计算机系统标引论文内容特征的词语。</div>
        <t-input left="承办单位" right="业务拓展部"></t-input>
        <t-input left="编号" right="1823749184711942"></t-input>
        <t-input left="承办人" right="李经理"></t-input>
        <t-input left="联系电话" right="17688280320"></t-input>
        <t-input left="审批分管领导" right="张经理"></t-input>
        <t-input left="呈批其他分管领导" right="刘经理"></t-input>
        <t-input left="卡中心会签部门"></t-input>
        <div class="add">
          <span>业务拓展部</span>
          <span>财务部</span>
          <span>技术部</span>
          <span>移动金融</span>
          <span>人事部</span>
        </div>
        <t-input left="主送单位" right="无"></t-input>
        <t-input left="抄送单位" right="无"></t-input>
        <t-input left="内部发送单位" right="无"></t-input>
        <t-input left="发文类型" right="制度类"></t-input>
        <div class="add">
          <div class="type">
            <div class="type-left">修订类型</div><div class="type-right">新制度</div>
          </div>
          <div class="type">
            <div class="type-left">制度等级</div><div class="type-right">管理办法</div>
          </div>
          <div class="type">
            <div class="type-left">制度版本号</div><div class="type-right">试行</div>
          </div>
          <div class="type">
            <div class="type-left">是否导入内控平台</div><div class="type-right">是</div>
          </div>
        </div>
        <t-input left="延时记录" right="无"></t-input>
        <t-input left="流程选择"></t-input>
        <t-input left="下一处理节点" right="领导审批"></t-input>
        <t-input left="下一处理人" right="系经理"></t-input>
      </div>
      <div class="footer" v-if="submit">
        <div class="wrap">
          <div class="opinion">
            <div>您的意见</div>
            <input type="text" value="">
          </div>
          <div class="btn-box">
            <div v-for="(item, index) in btns" :key="index" :class="{ check: selected == index }" @click="change(index)">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
import tInput from "../component/myInput.vue"
export default {
  data() {
    return {
      selected: 1,
      submit: true,
      msg: '',
      inputfix: 'inputfix',
      btns: [],
      type: [
        {

        }
      ]
    }
  },
  components: {
    tInput
  },
  mounted() {
    let title = this.$route.query.title
    switch (title) {
    case "待办事项": this.btns = ['提交']
      return
    case "已办事项": this.btns = ['驳回']
      return
    case "待阅事项": this.submit = false
      return
    }
  },
  methods: {
    change(a) {
      this.selected = a
      console.log(this.selected)
      if (this.selected == 0) {
        this.msg = ''
      }
    },
    goPage(e) {
      this.$router.push(e)
    },
  }
}
</script>

<style lang="scss" scoped>
.main{
  background: rgba(255, 255, 255, 1);
}
.list {
  display: flex;
  width: 7.5rem;
  height: 1.6rem;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.18rem;
  margin-bottom: 0.2rem;
  padding-top: 0.26rem;
  > .item {
    flex: 1;
    text-align: center;
    font-size: 0.26rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    > .icon {
      font-size: 0.6rem;
    }
    > .one {
      color: #0fb3ee;
    }
    > .two {
      color: #ffc821;
    }
    > .three {
      color: #ff9500;
    }
  }
}
.add {
  width: 6.9rem;
  padding: 0.3rem 0.3rem 0.3rem 0.24rem;
  background: #fafafa;
  border-left: 0.01rem solid rgba(234, 234, 234, 1);
  border-bottom: 0.01rem solid rgba(234, 234, 234, 1);
  border-right: 0.01rem solid rgba(234, 234, 234, 1);
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333333;
  margin: 0 auto;
  > span {
    display:inline-block;
    margin-right:.4rem;
    margin-bottom:.32rem;
    font-size:.32rem;
  }
  > span:nth-of-type(4) {
    margin-right: 0;
  }
  > .type {
    display:flex;
    font-size:.28rem;
    color:#333333;
    margin-bottom:.4rem;
    >.type-left{
      flex:1;
      text-align:left;
    }
    >.type-right{
      flex:1;
      text-align:right;
    }
  }
  > .type:last-child {
    margin-bottom:0;
  }
}
.footer {
  background: rgba(255, 255, 255, 1);
  width: 7.5rem;
  margin-top: 0.23rem;
  .opinion{
    width: 6.9rem;
    margin: 0 auto;
    display: flex;
    border-bottom:1px solid rgba(234,234,234,1);
    > div {
      color: #CCCCCC;
      font-size:.32rem;
      padding: .35rem 0;
      width:20%;
      margin-right:.2rem;
    }
    >input{
      flex:1;
    }
  }
}
.btn-box {
  display: flex;
  padding-top: 0.34rem;
  padding-bottom: 0.39rem;
  justify-content: center;
  > div {
    width: 2.88rem;
    height: 0.88rem;
    border: 0.01rem solid rgba(215, 0, 8, 1);
    border-radius: 0.44rem;
    text-align: center;
    line-height: 0.88rem;
    font-size: 0.36rem;
    color: #d70008;
    box-sizing: border-box;
  }
  > div:first-child {
    margin-right: 0.37rem;
    //margin-left: 0.44rem;
  }
  > .check {
    background: #d70008;
    color: rgba(255, 255, 255, 1);
  }
}
.add {
  width: 6.9rem;
  padding: 0.3rem 0.3rem 0.3rem 0.24rem;
  background: #fafafa;
  border-left: 0.01rem solid rgba(234, 234, 234, 1);
  border-bottom: 0.01rem solid rgba(234, 234, 234, 1);
  border-right: 0.01rem solid rgba(234, 234, 234, 1);
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333333;
  margin: 0 auto;
  > div {
    font-size:.28rem;
    color:#333333;
    flex:1;
  }
  >.type-left{
    text-align:left;
  }
  >.type-right{
    text-align:right;
  }
}
</style>

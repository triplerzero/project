<!-- 财务在线页面 -->
<!-- @param apply [number] 费用申请的数量-->
<!-- @param account [number] 申请费用报销的数量-->
<!-- @param pay [number] 供应商付款的记录数量-->
<!-- @param buy [number] 采购申请的数量-->
<!-- @param process [number] 采购流程管理的数量-->
<template>
  <t-page>
    <t-header slot="top">
      <div class="big">财务在线</div>
      <div slot="right">
        <i class="icon citicFont citic-shezhi"></i>
      </div>
    </t-header>
    <div>
      <div class="cost first"><span>费用申请</span><div><span>{{ apply }}</span><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
      <div class="cost" @click="changeTo('/cost/supplier/money')"><span>费用报销</span><div><span>{{ account }}</span><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
      <div class="cost" @click="changeTo('/cost/supplier/supplier')"><span>供应商付款</span><div><span>{{ pay }}</span><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
      <div class="cost"><span>采购申请</span><div><span>{{ buy }}</span><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
      <div class="cost"><span>采购流程管理</span><div><span>{{ process }}</span><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
      <div class="cost"><span>各类表单信息查询</span><div><i class="icon citicFont citic-xingzhuangkaobei2"></i></div></div>
    </div>
  </t-page>
</template>

<script>
export default {
  data() {
    return {
      apply: 0,
      account: 9,
      pay: 3,
      buy: 3,
      process: 1
    }
  },
  methods: {
    /**
     * @function 点击对应信息查看详情
     */
    changeTo(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@s/mixin';
.big{
font-size: .36rem;
}
.T_header i{
font-size: .44rem;
}
.first{
margin-top: .18rem;
}
.cost{
@include flex;
padding: 0 .31rem 0 .41rem;
height: 1rem;
background: #fff;
border-bottom: 1px solid #ddd;
> span{
font-size: .32rem;
font-weight: bold;
}
> div{
display: flex;
}
> div >span{
color: red;
}
}
.cost:last-of-type{
border-bottom: none;
}
</style>

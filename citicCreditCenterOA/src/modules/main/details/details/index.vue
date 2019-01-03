<!-- 查看个人详情页面 -->
<!-- @param realname [string] 被查询者姓名-->
<!-- @param work [string] 被查询者职业类型-->
<!-- @param sex [string] 被查询者性别-->
<!-- @param department [string] 被查询者所在部门-->
<!-- @param tel [number] 被查询者电话号码-->
<!-- @param phone [number] 被查询者手机号码-->
<!-- @param mail [string] 被查询者邮件地址-->
<template>
  <t-page>
    <t-header slot="top">
      <div class="big">个人详情</div>
    </t-header>
    <div class="user">
      <div class="surname">{{ realname[0] }}</div>
      <div class="users">
        <span>{{ realname }}</span>
        <span>{{ work }}</span>
      </div>
      <div></div>
    </div>
    <div>
      <div class="one"><span>姓别</span><div>{{ sex }}</div></div>
      <div class="one"><span>部门</span><div>{{ department }}</div></div>
      <div class="one"><span>电话</span><div>{{ tel }}</div></div>
      <div class="one"><span>手机</span><div>{{ phone }}</div></div>
      <div class="one"><span>邮件地址</span><div>{{ mail }}</div></div>
    </div>
  </t-page>
</template>

<script>
export default {
  data() {
    return {
      realname: '',
      work: '',
      sex: '',
      department: '',
      tel: '',
      phone: '',
      mail: ''
    }
  },
  mounted() {
    this.realname = this.$route.query.name
    this.work = this.$route.query.job
    this.sex = this.$route.query.sex
    this.department = this.$route.query.department
    this.tel = this.$route.query.tel
    this.phone = this.$route.query.phone
    this.mail = this.$route.query.email
    console.log(this.$route.query)
  }
}
</script>

<style lang="scss" scoped>
.big,.surname{
  font-size: .36rem;
}
.user{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: .18rem 0 .2rem;
  width: 7.5rem;
  height: 1.6rem;
  background: #fff;
  .surname{
    margin: .4rem .25rem .4rem .51rem;
    width: .8rem;
    height: .8rem;
    background: #49CC83;
    border-radius: 50%;
    text-align: center;
    line-height: .8rem;
    color: white;
  }
}
.users{
  display: flex;
  flex-direction: column;
  span:nth-of-type(1){
    font-size: .32rem;
    font-weight: bold;
  }
  span:nth-of-type(2){
    margin-top: .14rem;
    padding: .08rem .14rem;
    border: 1px solid #49CC83;
    font-size: .24rem;
    text-align: center;
    color: #2189FF;
  }
}
.one{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  height: 1rem;
  box-sizing: border-box;
  padding: 0 .32rem 0 .29rem;
  background: #fff;
  font-size: .3rem;
  color: #333;
  font-weight: 500;
  border-bottom: 1px solid #eaeaea;
}
.one:last-of-type{
  border-bottom: none;
}
</style>

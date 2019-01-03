<!-- 审批意见页面 -->
<!-- @param title [string] 审批部门所属类型-->
<!-- @param agree [string] 审批人意见 同意或不同意-->
<!-- @param name [string] 审批人姓名-->
<!-- @param department [string] 审批人所在部门-->
<!-- @param date [string] 审批日期-->
<!-- @param clock [string] 审批时间-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">
      <div class="big">审批意见</div>
    </t-header>
    <div class="option">
      <div v-for="(item,index) in advice" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="line">
          <div class="different" v-for="(v,i) in item.content" :key="i">
            <div class="up">
              <span>{{ v.agree }}</span>
              <span>{{ v.name }}</span>
              <span>{{ v.department }}</span>
            </div>
            <div class="down">
              <span>{{ v.date }}</span>
              <span>{{ v.clock }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </t-page>
</template>

<script>
export default {
  data() {
    return {
      advice: [
        {
          title: '签发',
          content: [
            {
              "agree": '同意。审批通过',
              "name": '张三',
              "department": '财务部门',
              "date": '2018/11/12',
              "clock": '12:11'
            }
          ]
        },
        {
          title: '承办部门意见',
          content: [
            {
              "agree": '同意。审批通过',
              "name": '张三',
              "department": '办公室',
              "date": '2018/11/12',
              "clock": '12:11'
            }
          ]
        },
        {
          title: '卡中心会签意见',
          content: [
            {
              "agree": '同意。审批通过',
              "name": '张经理',
              "department": '这个部门名字很长很长很长',
              "date": '2018/11/12',
              "clock": '12:11'
            },
            {
              "agree": '同意。审批通过',
              "name": '张三',
              "department": '办公室',
              "date": '2018/11/12',
              "clock": '12:11'
            },
            {
              "agree": '不同意。我得意见有很多很多很多很多很多很多很多很多很多很多很多，多的三条意见栏都放不下',
              "name": '张三',
              "department": '营销部',
              "date": '2018/11/12',
              "clock": '12:11'
            },
            {
              "agree": '同意。审批通过',
              "name": '张三',
              "department": '办公室',
              "date": '2018/11/12',
              "clock": '12:11'
            }
          ]
        },
        {
          title: '办公室核稿意见',
          content: [
            {
              "agree": '同意。审批通过',
              "name": '张三',
              "department": '办公室',
              "date": '2018/11/12',
              "clock": '12:11'
            }
          ]
        },
        {
          title: '承办部门校对意见',
          content: [
            {
              "agree": '同意。审批通过，补充说明，需要额外增加置办条件',
              "name": '张三',
              "department": '承办部',
              "date": '2018/11/12',
              "clock": '12:11'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.big{
  font-size: .36rem;
}
.option{
  background: #fff;
  font-size: .32rem;
}
.title{
  padding: .35rem .3rem;
  color: #999;
}
.down{
  margin-top: .33rem;
  color: #999;
}
.different{
  padding: .37rem .38rem .28rem;
  background: rgba(250,250,250,1);;
  border-radius: .08rem;
}
.line{
  width: 6.9rem;
  margin: auto;
  border: 1px solid #eaeaea;
}
</style>

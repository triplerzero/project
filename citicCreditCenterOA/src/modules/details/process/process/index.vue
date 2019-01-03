<!-- 流程跟踪页面 -->
<!-- @param title [string] 任务节点类型-->
<!-- @param first [string] 节点操作人工作类型-->
<!-- @param two [string] 流程处理状态-->
<!-- @param third [string] 加签/只会人-->
<template>
  <t-page>
    <t-header slot="top">
      <div class="big">流程跟踪</div>
    </t-header>
    <div class="content">
      <div class="contentTop">
        <div class="task">任务节点</div>
        <div class="node">节点操作人</div>
        <div class="node deal">处理状态</div>
        <div class="sign">加签/只会人</div>
      </div>
      <div class="contents" v-for="(item,index) in list" :key="index">
        <div class="left task">{{ item.title }}</div>
        <div class="right">
          <div v-for="(v1,i) in item.test" :key="i">
            <div class="my">
              <div class="centers">{{ v1.first }}</div>
              <div class="centers" :class="returnColor(v1)">{{ v1.two }}</div>
            </div>
            <div class="signs">{{ v1.third }}</div>
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
      list: [
        {
          "title": '承办人处理',
          'test': [
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '待办未处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '待办未处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            }
          ]
        },
        {
          "title": '直接主管审批',
          'test': [
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '待办未处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '待办未处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            },
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            }
          ]
        },
        {
          "title": '部门负责人审批',
          'test': [
            {
              "first": '测试',
              "two": '已处理',
              "third": '测试'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * @function 流程处理状态为‘已处理’时的不同
     */
    returnColor(i) {
      if (i.two == '已处理')  {
        return 'green'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@s/mixin';
.big{
  font-size: .36rem;
}
.content{
  margin-top: .2rem;
  background: #fff;
  font-size: .28rem;
}
.contentTop{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 1rem;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
  color: #999;
  > div{
    height: 1rem;
    line-height: 1rem;
  }
}
.task{
  width: 1.98rem;
  border-right: 1px solid #eaeaea;
  box-shadow:0px 0px 4px 0px rgba(153,153,153,0.2);
}
.node{
  width: 2rem;
}
.deal{
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
}
.sign{
  width: 1.53rem;
  overflow: hidden;
}
.contents{
  display: flex;
  flex-direction: row;
  .left{
    @include allCenter;
    color: #999;
  }
}
.right{
  width: 5.52rem;
  > div{
    display: flex;
    flex-direction: row;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #eaeaea;
  }
  > div:nth-of-type(2n-1){
      background: #fafafa;
  }
}
.my{
  display: flex;
  flex-direction: row;
  width: 4rem;
  .centers{
    width:2rem;
  }
  .centers:nth-of-type(2n){
     border-left: 1px solid #eaeaea;
     border-right: 1px solid #eaeaea;
  }
}
.signs{
    width: 1.5rem;
}
.green{
  color: #66cc66;
}
</style>

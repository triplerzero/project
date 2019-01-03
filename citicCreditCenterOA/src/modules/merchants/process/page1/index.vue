<template>
  <t-page>
    <t-header slot="top" class="header">流程跟踪</t-header>
    <q-table begin="操作" end="时间" :type="1">节点</q-table>
    <q-table
      v-for="(item,index) in tables"
      :key="index"
      :begin="item.handle"
      :end="item.date"
      :type="index%2+2"
    >
      {{ item.node }}
    </q-table>
  </t-page>
</template>

<script>
import qTable from "../components/qTable.vue"

export default {
  data() {
    return {
      tables: [
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        },
        {
          handle: "提交文档",
          node: "一级综合室经理",
          date: "2017/08/21"
        }
      ]
    }
  },
  mounted() {
    // console.log(tPage)
    console.log(qTable)
  },
  components: { qTable }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 0.2rem;
}
</style>




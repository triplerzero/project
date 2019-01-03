<!-- 选择流程页面 -->
<!-- @param prcessList [array] 流程清单-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top" class="header">
      添加流程自定义
    </t-header>
    <t-cell v-for="(item,index) in prcessList"
            :key="index"
            :title="item.title"
            is-link
            @click="goPage('/base/settings/customDetail');"
    >
    </t-cell>
  </t-page>
</template>

<script>
export default {
  data() {
    return {
      //流程的清单
      prcessList: []
    }
  },
  mounted() {
    this.prcessList = [
      {
        title: "流程分类1"
      },
      {
        title: "流程分类1"
      },
      {
        title: "流程分类1"
      },
      {
        title: "流程分类1"
      },
      {
        title: "流程分类1"
      }
    ]
  },
  methods: {
    goPage(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 0.18rem;
}
</style>

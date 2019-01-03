<template>
  <t-page>
    <t-header slot="top" class="header">费用报销</t-header>
    <div class="main">
      <q-form :items="items"></q-form>
    </div>
    <div slot="bottom">
      <q-bottom @pass="leftClicks()" @back="leftClick()" @turn="yourClick()"></q-bottom>
    </div>
  </t-page>
</template>

<script>
import qForm from "@/components/qForm.vue"
import qBottom from "@/components/qBottom.vue"
export default {
  data() {
    return {
      items: [
        new qForm.Item("单据编号", "YH98127322331131", false),
        new qForm.Item("标题", "11-1281", false),
        new qForm.Item("报销人", "孙维", false),
        new qForm.Item("部门", "财务审批部门", false),
        new qForm.Item("报销金额合计", "8000.00", true),
        new qForm.Item("批准金额合计", "8000.00", true)
      ]
    }
  },
  methods: {
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
  components: { qForm, qBottom },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.main {
  background: #ecedf0;
}
.bottom {
  background: white;
  .InputField {
    display: flex;
    align-items: center;
    position: relative;
    width: 7.5rem;
    height: 1rem;
    input {
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      width: 5rem;
      margin-left: 0.3rem;
    }
    &::after {
      content: " ";
      height: 1px;
      width: 6.9rem;
      background: #dddddd;
      position: absolute;
      top: 97%;
      left: 4%;
    }
  }
  .buttons {
    height: 0.99rem;
    width: 7.5rem;
    display: flex;
    align-items: center;
    div {
      width: 1.875rem;
      height: 1rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>




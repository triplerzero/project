<template>
  <t-page>
    <t-header slot="top" class="header"><span>流程跟踪</span></t-header>
    <div class="main">
      <q-form :items="items"></q-form>
    </div>
    <div slot="bottom" class="bottom">
      <div class="InputField">
        <input type="text" placeholder="你的意见">
      </div>
      <div class="buttons">
        <div>
          <span>通过</span>
        </div>
        <div>
          <span>驳回</span>
        </div>
        <div>
          <span>转办</span>
        </div>
        <div>
          <span>会签</span>
        </div>
      </div>
    </div>
  </t-page>
</template>

<script>
import qForm from "../components/qForm.vue"

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

  components: { qForm }
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




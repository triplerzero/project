<template>
  <t-page>
    <t-header><div slot="left"></div>我的</t-header>
    <div>
      <div class="group">
        <t-cell title="登录密码修改" is-link>
          <i slot="icon" class="icon citicFont citic-denglu-mima"></i>
        </t-cell>
        <t-cell title="手势密码开关">
          <i slot="icon" class="icon citicFont citic-shoushimima"></i>
          <t-switch v-model="gestureSwitch"></t-switch>
        </t-cell>
        <t-cell title="手势密码修改" is-link>
          <i slot="icon" class="icon citicFont citic-xiugai"></i>
        </t-cell>
        <t-cell title="指纹密码开关">
          <i slot="icon" class="icon citicFont citic-zhiwen"></i>
          <t-switch v-model="fingerSwitch"></t-switch>
        </t-cell>
      </div>
    </div>
  </t-page>
</template>
<script>
import { tSwitch } from 'team-ui'
export default {
  data() {
    return {
      fingerSwitch: false,
      gestureSwitch: false
    }
  },
  components: {
    tSwitch
  }
}
</script>

<style lang="scss" scoped>
.group{
  margin: .2rem 0px;
}
.icon{
  font-size: .4rem;
  color: #bb0f04;
  margin-right: .19rem;
}
</style>

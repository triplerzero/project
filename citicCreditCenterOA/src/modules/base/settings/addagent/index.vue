<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">
      <div>添加代理人</div>
      <t-header-right slot="right"><div class="right">保存</div></t-header-right>
    </t-header>

    <div class="addagent">
      <t-label
        name1="代理类型"
        name2="全权代理"
        name3="部分代理"
        @click="select();"
        @show1="play1();"
        @show2="play2();"
      ></t-label>
    </div>
    <div class="addagent">
      <div class="group">
        <t-cell title="开始时间" is-link>请选择</t-cell>
        <t-cell title="结束时间" is-link>请选择</t-cell>
        <t-cell title="代理人" is-link>请选择</t-cell>
      </div>
    </div>
    <t-label
      name1="是否有效"
      name2="是"
      name3="否"
      @click="select();"
    ></t-label>
    <div v-show="msg">
      <div class="bottom">
        <div>流程自定义</div>
        <div @click="goPage('/base/settings/custom')">＋ 添加</div>
      </div>
      <div class="addagent">
        <div class="group">
          <t-cell v-for="(item,index) in selectedProcess"
                  :key="index"
                  :title="item.name"
          >
            <i class="citicFont citic-xingzhuang9" @click="del(item)"></i>
          </t-cell>
        </div>
      </div>
    </div>
  </t-page>
</template>

<script>
import tLabel from "../component/radius"
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      cla: false,
      msg: true,
    }
  },
  components: { tLabel },
  computed: {
    ...mapState(["selectedProcess"])
  },
  methods: {
    goPage(e) {
      this.$router.push(e)
    },
    select() {
      this.cla = true
    },
    play1() {
      this.msg = false
    },
    play2() {
      this.msg = true
    },
    ...mapMutations(["setProcess"]),
    del(e) {
      let arr = this.selectedProcess
      arr = arr.filter(item=>{
        return item.id != e.id
      })
      this.setProcess(arr)
    }
  }
}
</script>

<style lang="scss" scoped>
.addagent .T_cell_body{
  margin-left: 0;
}
.addagent .citicFont{
  font-size:.3rem;
  color:#2189FF;
}
.right{
  height:.88rem;
  line-height:.88rem;
}
.differ {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(204, 204, 204, 1);
  margin-right: 0.27rem;
}
.bottom {
  width: 7.5rem;
  padding: 0 0.29rem;
  display: flex;
  box-sizing: border-box;
  > div {
    flex: 1;
    height:1.0rem;
    line-height:1.0rem;
  }
  > div:nth-of-type(1) {
    text-align: left;
    color: rgba(51, 51, 51, 1);
    font-size: 0.32rem;
    font-weight:blod;
  }
  > div:nth-of-type(2) {
    color: #2189ff;
    font-size: 0.32rem;
    text-align: right;
  }
}
</style>

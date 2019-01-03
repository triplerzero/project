<!-- 选择流程页面 -->
<!-- @param originProcess [array] 流程信息-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top" class="header">
      添加流程自定义
      <t-header-right slot="right" @click="confirm()">
        <div style="height:.88rem; line-height:.88rem;">确定</div>
      </t-header-right>
    </t-header>
    <q-input placeholder="输入标题、描述" v-model="inputContent"></q-input>
    <q-test
      v-for="(item,index) in processes"
      :key="index"
      :version="item.version"
      :pro-name="item.name"
      :state="item.state"
      @select="showSelected(index)"
      @click="console.log('click')"
    ></q-test>
  </t-page>
</template>
<script>
import qTest from "../component/qTest.vue"
import qInput from "../component/qInput.vue"
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      //搜索框内容
      inputContent: "",
      //源流程信息
      originProcess: [],
      //加工后流程信息
      processes: [],
    }
  },
  mounted() {
    this.originProcess = [
      {
        name: "卡中心部门1",
        id: 1
      },
      {
        name: "卡中心部门2",
        id: 2
      },
      {
        name: "卡中心部门发文流程3",
        id: 3
      },
      {
        name: "卡中心部门发文流程4",
        id: 4
      },
      {
        name: "卡中心部门发文流程5",
        id: 5
      },
      {
        name: "卡中心部门发文流程6",
        id: 6
      }
    ]
  },
  watch: {
    /**
     * @function 加工源流程信息，添加state选择属性
     */
    originProcess: {
      handler(e) {
        var arr = e.map(item => {
          let temp = item
          for (let i of this.selectedProcess) {
            if (temp.id == i.id) {
              temp.state = true
              return temp
            }
          }
          temp.state = false
          return temp
        })
        this.processes = this.processes.concat(arr)
      },
      immediate: true
    }
  },
  computed: {
    /**
     * @function 获取store里保存的被选择的流程清单
     */
    ...mapState(["selectedProcess"])
  },
  methods: {
    /**
     * @function 更改流程被选取的状态
     * @author 丘嘉升
     */
    showSelected(index) {
      this.processes = this.processes.map((a, b) => {
        if (b == index) {
          a.state = !a.state
          return a
        } else {
          return a
        }
      })
    },
    /**
     * @function 确定按钮功能，保存已被选取的流程
     */
    confirm() {
      let arr = this.processes.filter(item => item.state)
      this.setProcess(arr)
      // console.log(this.selectedProcess)
      this.$router.go(-2)
    },
    ...mapMutations(["setProcess"])
  },
  components: {
    qTest,
    qInput
  }
}
</script>
<style lang="scss" scoped>

</style>

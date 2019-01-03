<template>
  <t-page>
    <t-header slot="top" class="header">添加流程自定义</t-header>
    <div class="inputfield">
      <i class="citicFont citic-sousuo"></i>
      <input type="text" placeholder="输入标题、描述">
    </div>
    <q-test
      v-for="(item,index) in processes"
      :key="index"
      :version="item.version"
      :pro-name="item.proName"
      :state="item.state"
      @click="Choosen(item)"
    ></q-test>
  </t-page>
</template>
<script>
import qTest from "../components/qTest.vue"
export default {
  data() {
    return {
      processes: [
        {
          state: false
        },
        {
          state: false
        },
        {
          state: false
        },
        {
          state: false
        },
        {
          state: false
        },
        {
          state: false
        }
      ]
    }
  },
  methods: {
    Choosen(item) {
      // console.log(item.state)
      item.state = !item.state
      // for (let i of this.processes) {
      //   if (i == item) {
      //     i.state = !i.state
      //   } else {
      //     i.state = false
      //   }
      // }
    }
  },
  components: {
    qTest
  }
}
</script>
<style lang="scss" scoped>
.inputfield {
  i {
    margin-left: 0.25rem;
    margin-right: 0.18rem;
  }
  display: flex;
  align-items: center;
  width: 6.9rem;
  height: 0.8rem;
  margin: 0.18rem auto;
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  background: white;
  border-radius: 0.1rem;
}
</style>

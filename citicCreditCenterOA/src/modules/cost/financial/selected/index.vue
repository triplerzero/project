<!-- 选择处理人页面 -->
<!-- @param peopleList [array] 人员信息-->
<!-- @param departmentList [array] 部门信息-->
<template>
  <t-page>
    <t-page :options="{nativeScroll: false}">
      <t-header slot="top">
        选择处理人
        <t-header-right slot="right">
          <i class="citicFont citic-xingzhuang7" @click="isSetting=true;"></i>
        </t-header-right>
      </t-header>
      <div class="left">
        <div class="showDep" v-if="selDep.length>0">
          <div class="item" v-for="(item,index) in selDep" :key="index">
            <div></div>
            <span>{{ item }}</span>
            <i class="citicFont citic-cuo" @click="delDep(item)"></i>
          </div>
        </div>
        <i class="citicFont citic-sousuo search"></i>
        <input type="text" placeholder="请输入姓名" v-model="inputContent">
      </div>
      <div
        class="main"
        v-for="(item,index) in peopleList"
        :key="index"
        v-if="judge(item)"
        @click="select(item,selPeo)"
      >
        <div>
          <span>{{ item.name }}</span>
          <span>{{ item.department }}</span>
        </div>
        <i class="citicFont citic-dui" v-if="showSelected(item,selPeo)"></i>
      </div>
      <transition
        enter-active-class="faster animated fadeIn"
        leave-active-class="faster animated fadeOut"
      >
        <div class="setting" @click="isSetting=false;temSelDep=selDep.map(item=>item)" v-if="isSetting"></div>
      </transition>
      <t-bottom slot="bottom">
        <div class="final" v-if="selPeo.length>0" @click="finalConfirm()">确定({{ selPeo.length }})</div>
      </t-bottom>
    </t-page>
    <transition
      enter-active-class="faster animated slideInRight"
      leave-active-class="faster animated slideOutRight"
    >
      <div class="window" v-if="isSetting" ref="win">
        <div class="total" v-for="(item,index) in departmentList" :key="index">
          <div class="department" @click="unFold(item)">
            <span class="title">{{ item.name }}</span>
            <div>
              <span>全部</span>
              <i class="citicFont citic-xingzhuangkaobei2" :class="{'open': item.unfold}"></i>
            </div>
          </div>
          <div class="details" v-if="item.unfold">
            <div
              v-for="(k,i) in item.member"
              :key="i"
              @click="select(k,temSelDep)"
              :class="returnClass(showSelected(k,temSelDep))"
            >
              {{ k }}
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition
      enter-active-class="faster animated slideInRight"
      leave-active-class="faster animated slideOutRight"
    >
      <div class="buttons" v-if="isSetting">
        <div class="reset" @click="reset()">重置</div>
        <div class="confirm" @click="confirm()">确定</div>
      </div>
    </transition>
  </t-page>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      //搜索栏输入的内容
      inputContent: "",
      //人员信息列表
      peopleList: [],
      //部门信息列表
      departmentList: [],
      //是否正在设置部门
      isSetting: false,
      //被选择的人员名单
      selPeo: [],
      //暂存被选择的企业名单
      temSelDep: [],
      //最终确认被选择的企业名单
      selDep: [],
    }
  },
  mounted() {
    this.peopleList = [
      {
        name: "吴春华",
        department: "外联室",
        id: 1
      },
      {
        name: "张春晖",
        department: "文档室",
        id: 2
      },
      {
        name: "林征程",
        department: "战略发展室",
        id: 3
      },
      {
        name: "周星驰",
        department: "外联室",
        id: 4
      },
      {
        name: "刘德华",
        department: "文秘室",
        id: 5
      },
      {
        name: "周德华",
        department: "外联室",
        id: 6
      },
      {
        name: "张春校",
        department: "战略发展室",
        id: 7
      }
    ]
    this.departmentList = [
      {
        name: "卡中心全体员工",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "卡中心党委",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "卡中心纪委",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "机构管理部",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "行政管理部",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "办公室",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      },
      {
        name: "党群监察部",
        member: ["文秘室", "外联室", "文档室", "战略规划室", "战略发展室"]
      }
    ]
    this.selPeo = this.selectedPeople.map(item => item)
  },
  watch: {},
  computed: {
  /**
   * @param {Array} selectedPeople 从store获取被选择人员名单
   */
    ...mapState(["selectedPeople"])
  },
  methods: {
    /**
    * @function 检索人员是否合筛选条件，返回boolean
    * @author 丘嘉升
    */
    judge(item) {
      //搜索名字
      let a = item.name.includes(this.inputContent)
      //搜索部门
      let b = this.selDep.includes(item.department)
      return this.selDep.length > 0 ? (a && b) : a
    },
    /**
     * @function 把item放到list数组中，如item已存在于list数组，便移除
     * @author 丘嘉升
     */
    select(item, list) {
      if (typeof item.id != "undefined") {
        for (let i of list) {
          if (i.id == item.id) {
            let index = list.indexOf(i)
            list.splice(index, 1)
            return
          }
        }
        list.push(item)
        return
      }
      //处理人物

      if (!list.includes(item)) {
        list.push(item)
      } else {
        let index = list.indexOf(item)
        list.splice(index, 1)
      }
      //处理部门
    },
    /**
     * @function 检索item是否存在于list数组中，返回boolean
     */
    showSelected(item, list) {
      if (typeof item.id != "undefined") {
        for (let i of list) {
          if (i.id == item.id) return true
        }
        return false
      }
      return list.includes(item)
    },
    /**
     * @function 设置部门弹框中的确认按钮功能
     */
    confirm() {
      this.isSetting = false
      this.selDep = this.temSelDep.map(item=>item)
    },
    /**
    * @function 设置部门弹框中的重置按钮功能
    */
    reset() {
      this.temSelDep = []
    },
    /**
     * @function 从选中部门列表中删除item
     */
    delDep(item) {
      let index = this.selDep.indexOf(item)
      this.selDep.splice(index, 1)
      this.temSelDep = this.selDep.map(item=>item)
    },
    /**
     * @function 根据boolean返回css类
     */
    returnClass(bool) {
      if (bool) return "selected"
      else return "notSelected"
    },
    /**
     * @function 展开部门，显示相应内容的方法
     */
    unFold(item) {
      this.departmentList = this.departmentList.map(dep => {
        if (typeof dep.unfold == 'undefined') dep.unfold = false
        if (dep == item) dep.unfold = !dep.unfold
        return dep
      })
    },
    ...mapMutations(["setPeople"]),
    /**
     * @function 最终确认键的方法
     */
    finalConfirm() {
      this.setPeople(this.selPeo)
      this.$router.push("/cost/supplier/pay2")
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;
  width: 6.9rem;
  height: 0.8rem;
  margin: 0.18rem auto;
  color: #cccccc;
  background: white;
  input {
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
  }
  .search {
    color: #989fac;
    font-size: 0.34rem;
    margin-left: 0.35rem;
    margin-right: 0.23rem;
  }
}

.showDep {
  position: absolute;
  z-index: 5;
  height: 1rem;
  width: 500rem;
  display: flex;
  align-items: center;
  margin-left: 0.9rem;
  .item {
    display: flex;
    justify-content: space-around;
    width: 2rem;
    height: 0.6rem;
    background: #7d7d7d;
    border-radius: 0.3rem;
    color: white;
    align-items: center;
    margin-right: 0.18rem;
    span {
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
    }
    i {
      color: white;
      font-size: 0.21rem;
      margin-right: 0.1rem;
    }
  }
}
.main {
  width: 7.5rem;
  height: 1rem;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  div {
    display: flex;
    align-items: center;
    span:nth-child(1) {
      margin-left: 0.34rem;
      margin-right: 0.45rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    span:nth-child(2) {
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
  }
  i {
    color: #4ab14f;
    font-size: 0.28rem;
    font-weight: bold;
    margin-right: 0.35rem;
  }
}

.final{
  width: 6.9rem;
  height: 1rem;
  background:rgba(215,0,8,1);
  box-shadow:0px 0.04rem 0.2rem 0.07rem rgba(54,54,54,0.4);
  border-radius:0.5rem;
  text-align: center;
  line-height: 1rem;
  font-size:0.36rem;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(255,255,255,1);
  margin: 0 auto;
}

$alertwidth: 6.7rem;
$animateTime: 0.5s;
.setting {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  position: fixed;
  background: rgba($color: #000000, $alpha: 0.5);
}
.window {
  background: white;
  height: calc(100vh - 1rem);
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
  width: $alertwidth;
  overflow: auto;
  .total > .department {
    width: $alertwidth;
    margin-top: 0.6rem;
    margin-bottom: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 0.32rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-left: 0.22rem;
    }
    div {
      color: rgba(153, 153, 153, 1);
      display: flex;
      span {
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
      }
      i {
        font-size: 0.3rem;
        margin-right: 0.28rem;
        margin-left: 0.17rem;
        transform: rotate(90deg);
        transition: all .2s ease;
      }
      .open{
        transform: rotate(-90deg);
      }
    }
  }
  .total > .details {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    margin-top: 0.23rem;
    div {
      width: 2rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      margin-left: 0.18rem;
      margin-top: 0.33rem;
    }
    .selected {
      background: #fff1f2;
      border: 1px solid rgba(215, 0, 8, 1);
      color: #d70008;
    }
    .notSelected {
      background: #f0f0f0;
      border: 1px solid #f0f0f0;
      color: #333333;
    }
  }
}
 .buttons {
    width: $alertwidth;
    height: 1rem;
    z-index: 20;
    font-size: 0.36rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    display: flex;
    text-align: center;
    line-height: 1rem;
    position: absolute;
    bottom: 0;
    right:0;
    .reset {
      width: $alertwidth/2;
      height: 1rem;
      border: 1px #d70008 solid;
      color: #d70008;
      background: white;
    }
    .confirm {
      width: $alertwidth/2;
      height: 1rem;
      border: 1px #d70008 solid;
      color: white;
      background: #d70008;
    }
  }
</style>

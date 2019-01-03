<!-- 待办事务页面 -->
<!-- @param backlogs [array] 待处理事务信息-->
<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top" class="header">{{ title }}</t-header>
    <div class="inputField">
      <i class="citicFont citic-sousuo"></i>
      <input type="text" placeholder="搜索" v-model="inputContent">
    </div>
    <div class="main" v-for="(item,index) in backlogs" :key="index" @click="goPage({title})">
      <div class="icon">
        <i :class="processIcon(item)"></i>
      </div>
      <div :class="returnClass(index)">
        <div class="content-in">
          <span class="content-title">{{ item.title }}</span>
          <div class="content-detail">
            <div>{{ item.processType }}</div>
            <div>{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部样式 -->
    <!-- <div class="footer" slot="bottom">
      <div class="isActive">
        <div>
          <i class="citicFont citic-tuoyuankaobei"></i>
          <span>办公</span>
        </div>
      </div>
      <div class="notActive">
        <div>
          <i class="citicFont citic-xingzhuangkaobei1"></i>
          <span>通讯录</span>
        </div>
      </div>
      <div class="notActive">
        <div>
          <i class="citicFont citic-xingzhuangkaobei"></i>
          <span>我的</span>
        </div>
      </div>
    </div>-->
  </t-page>
</template>

<script>
export default {
  data() {
    return {
      //页面标题
      title: '',
      //待处理的事务列表
      backlogs: [
        {
          title: "中间业务中心黄俊出差55申请",
          processType: "账务流程",
          time: "2017-03-20  09:21:12"
        },
        {
          title: "中间业务中心黄俊出差55申请",
          processType: "发放流程",
          time: "2017-03-20  09:21:12"
        },
        {
          title: "中间业务中心黄俊出差55申请",
          processType: "账务流程",
          time: "2017-03-20  09:21:12"
        },
        {
          title: "中间业务中心黄俊出差55申请",
          processType: "发放流程",
          time: "2017-03-20  09:21:12"
        }
      ]
    }
  },
  //获取页面标题
  mounted() {
    this.title = this.$route.query.title
    // console.log(this.$route)
  },
  methods: {
    /**
     * @function 根据流程类型返回图标类型
     * @author 丘嘉升
     */
    processIcon(backlog) {
      switch (backlog.processType) {
      case "账务流程":
        return "citicFont citic-shenqing blue"
      case "发放流程":
        return "citicFont citic-baogao green"
      default:
        return "citicFont citic-shenqing blue"
      }
    },
    goPage(query) {
      this.$router.push({path: '/details/items/list', query})
    },
    /**
     * @function 显示的第一个事务没有横线
     */
    returnClass(index) {
      if (index == 0) {
        return 'content-first'
      } else {
        return 'content'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inputField {
  i {
    font-size: 0.4rem;
    margin-right: 0.1rem;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 6.9rem;
  height: 0.8rem;
  margin: 0.18rem auto;
  color: #999999;
  background: white;
  border-radius: 0.1rem;
  input {
    font-size: 0.32rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    width: 3.65rem;
  }
}

.main {
  display: flex;
  height: 1.8rem;
  width: 7.5rem;
  align-items: stretch;
  background: white;
  .icon {
    display: flex;
    align-items: center;
    i {
      margin-left: 0.19rem;
      margin-right: 0.38rem;
      font-size: 0.8rem;
    }
    .blue {
      color: #3cc7ff;
    }
    .green {
      color: #96e358;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    .content-in {
      width: 6.13rem;
      .content-title {
        font-size: 0.32rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .content-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        margin-top: 0.08rem;
        div:nth-child(2) {
          margin-right: 0.32rem;
        }
      }
    }
    &::after {
      content: "";
      width: 6.23rem;
      height: 1px;
      background: rgba(204, 204, 204, 1);
      position: absolute;
      right: 0;
      top: 0;
      transform: scaleY(0.5);
    }
  }
  .content-first {
    @extend .content;
    &::after {
      height: 0;
    }
  }
}


//底部样式
// .footer {
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 7.5rem;
//   height: 0.98rem;
//   background: white;
//   .isActive {
//     color: #bb0f04;
//     div {
//       display: flex;
//       flex-direction: column;
//       text-align: center;
//       i {
//         font-size: 0.34rem;
//       }
//       span {
//         font-size: 0.22rem;
//         font-family: PingFang-SC-Medium;
//         font-weight: 500;
//       }
//     }
//   }
//   .notActive {
//     @extend .isActive;
//     color: #999999;
//   }
// }
</style>

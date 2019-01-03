<template>
  <t-page>
    <t-header slot="top" @leftClick="leftClick">
      <div class="logo">
        <img src="@a/main/logo.png" />
      </div>
    </t-header>
    <div>
      <div>
        <t-carousel
          :data="carouselList"
        >
        </t-carousel>
      </div>
      <div class="card">
        <div class="line"><span class="title">您好</span>黄先生   4/28周日   三月二十</div>
        <div class="line"><span class="title">部门</span>中信银行卡中心</div>
      </div>
      <div class="boxBody">
        <div class="contain">
          <div class="box">
            <div class="item" @click="goPage('/details/items/backlog',{title: '待办事项'})">
              <div class="icon citicFont citic-xingzhuang1"></div>
              <div class="msg">待办事项</div>
            </div>
            <div class="item" @click="goPage('/details/items/backlog',{title: '待阅事项'})">
              <div class="icon citicFont citic-tuoyuan"></div>
              <div class="msg">待阅事项</div>
            </div>
            <div class="item" @click="goPage('/details/items/backlog',{title: '已办事项'})">
              <div class="icon citicFont citic-xingzhuang2"></div>
              <div class="msg">已办事项</div>
            </div>
            <div class="item">
              <div class="icon citicFont citic-xingzhuang3"></div>
              <div class="msg">修改密码</div>
            </div>
          </div>
          <div class="box">
            <div class="item" @click="goPage('/cost/financial/financial')">
              <div class="icon citicFont citic-xingzhuang6"></div>
              <div class="msg">财务在线</div>
            </div>
            <div class="item">
              <div class="icon citicFont citic-xingzhuang5"></div>
              <div class="msg">IT在线</div>
            </div>
            <div class="item" @click="goPage('/base/settings/setagent')">
              <div class="icon citicFont citic-xingzhuang7"></div>
              <div class="msg">设置代理人</div>
            </div>
            <div class="item" @click="goPage('/base/settings/phrase')">
              <div class="icon citicFont citic-xingzhuang4"></div>
              <div class="msg">常用语设置</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
import DatePicker from 'datepicker'
import { tCarousel } from 'team-ui'
export default {
  data() {
    return {
      carouselList: [
        {
          pic: require('@a/main/1.jpg'),
        },
        {
          pic: require('@a/main/2.jpg'),
        },
        {
          pic: require('@a/main/3.jpg'),
        },
        {
          pic: require('@a/main/4.jpg'),
        },
        {
          pic: require('@a/main/5.jpg'),
        }
      ]
    }
  },
  methods: {
    // goPage(e) {
    //   this.$router.push(e)
    // },
    goPage(path, query) {
      this.$router.push({path, query})
    },
    leftClick() {
      this.$dialog({
        msg: '是否关闭app',
        okButton: '确认',
        cancelButton: '取消'
      }).then((a) => {
        console.log(a)
      })
    },
    datapicker() {
      new DatePicker({
        "type": "3",
        "title": '请选择日期',
        "maxYear": "2100",
        "minYear": "1900",
        "separator": "-",
        "defaultValue": '',
        "callBack": function(val) {
          console.log(val)
        }
      })
    }
  },
  components: {
    tCarousel
  },
  mounted() {
    console.log(this.$route.query)
  },
}
</script>
<style lang="scss" scoped>
.logo{
  width: 2.8rem;
  height: .52rem;
  >img{
    width: 100%;
    height: 100%;
    display: block;
  }
}
.card{
  margin: .2rem auto;
  background-color: white;
  padding: .3rem;
  font-size: .32rem;
  >.line{
    margin: .2rem auto;
    .title{
      color: #999;
      margin-right: .26rem;
    }
  }
}
.boxBody{
  margin: .2rem auto;
  background-color: #fff;
  padding: 0px .3rem;
  >.contain{
    overflow: hidden;
    >.box{
      width: 7.5rem;
      height: 1.766rem;
      margin-left: -.3rem;
      display: flex;
      align-items: stretch;
      >.item{
        width: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        border-left: 1px solid #ebecef;
        border-bottom: 1px solid #ebecef;
        >.icon{
          color: #bb0f04;
          font-size: .5rem;
        }
        >.msg{
          font-size: .26rem;
          color: #333;
        }
      }
    }
    >.box:last-child{
      >.item{
        border-bottom: none;
      }
    }
  }
}
</style>

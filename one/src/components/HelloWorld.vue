<template>
  <div class="coupon">
    <div class="header">
      <div class="left"><router-link to="/coupon"><img src="./images/return.png" alt=""></router-link></div>
      <div class="center"><span>领劵中心</span></div>
      <div class="right">
        <a href="###"><img src="./images/icon_coupon@2x.png" alt=""></a>
      </div>
      <div class="right">
      <a href="###"><img src="./images/icon_more@2x.png" alt=""></a>
      </div> 
      </div>
      <div class="nav">
        <ul class="lists">
          <li><a href="###" class="active">精选</a></li>
            <li><a href="###">手机数码</a></li>
              <li><a href="###">服装服饰</a></li>
                <li><a href="###">生活家居</a></li>
                  <li><a href="###">母婴</a></li>
          </ul>
      </div>
    <div class="main">
      <div class="content" >
        <div class="left"><span>￥</span>100</div>
        <div class="right">
          <h2>欧莱雅天猫自营产品指定春季新妆护肤补水修复系列</h2>
          <p class="time">领取时间至2017.10.01</p>
          <p class="type">立即领</p>
        </div>
      </div>
        <div class="content">
        <div class="left background"><span>￥</span>50</div>
        <div class="right">
          <h2>金典有机奶</h2>
          <p class="time">领取时间至2017.10.01</p>
          <p class="type action">去使用</p>
        </div>
      </div>
        <div class="content">
        <div class="left"><span>￥</span>5</div>
        <div class="right">
          <h2>广发商城优惠券</h2>
          <p class="time">领取时间至2017.10.01</p>
          <p class="type actions">已抢光</p>
        </div>
      </div> 
      </div> 
     <NoCoupon>
      <img src="./images/暂无优惠券@2x.png" alt="">
      <p>暂无优惠券</p>
    </NoCoupon> 
  </div>
</template>

<script>
import NoCoupon from './nocoupon';
export default {
  name: 'coupon',
  data () {
    return {
      show:true
    }
  },
  components:{
    NoCoupon
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* start header */
.header{
  display: flex;
  flex-flow:row;
  background: #fff;
  font-size:0.17rem; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.44rem;
  align-items:center;
  z-index: 5;
  color: #222222;
}
.header .left{
width: 0.44rem;
height: 0.44rem;
display: flex;
}
.header .left img{
width: 0.44rem;
height: 0.44rem;
}
.header .center{
flex:1;
height: 0.44rem;
display: flex;
align-items: center;
justify-content: center;
padding-left:0.44rem; 
line-height: 0.24rem;
}
.header .right{
flex: none;
width:0.44rem;
height: 0.44rem;
}
.header .right img{
width: 0.44rem;
height: 0.44rem;
}
/* end header */
/* start nav */
.nav{
  position: fixed;
  top: 0.44rem;
  left:0;
  height: 0.40rem;
  width: 100%;
  background: #fff;
  z-index: 5;
  box-shadow: 0 2px 4px 0 rgba(51,51,51,0.10);
} 
.nav .lists{
width: 100%;
display: flex;
height: 0.40rem;
}
.nav .lists li{
flex: 1;
font-size:0.14rem; 
}
.nav .lists li a{
  display: inline-block;
  height: 0.40rem;
  line-height: 0.40rem;
  color: #222;
}
.active{
border-bottom: 0.02rem solid #E53935; 
}
/* end nav */
/* start main */
.main{
  position: absolute;
  top:0.86rem;
  left: 0;
  padding: 0.1rem;
}
.content{
  display: flex;
  height: 0.9rem;
  margin-bottom: 0.12rem;
}
.content .left{
  flex: none;
  width: 1rem;
  height: 0.9rem;
  background: url('./images/pic_券票_立即领@2x.png') no-repeat;
  background-size: cover;
  font-family: PingFangSC-Semibold;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  padding: 0.22rem 0;
}
.content .background{
   background: url('./images/pic_券票_去使用@2x.png') no-repeat;
   background-size: cover;
}
.content .left span{
  font-size:0.16rem; 
}
.content .right{
  flex: 1;
  width: 100%;
  height: 0.9rem;
  line-height: 0.17rem;
  padding: 0.14rem 0.07rem 0 0.08rem;
  text-align: left; 
  position: relative;
   background: #fff;
}
.content .right h2{
  font-weight: normal;
  font-size: 0.12rem;
  color: #222222;
}
.content .right p.time{
font-size: 0.12rem;
color: #bfbfbf;
position: absolute;
bottom:0.12rem; 
line-height: 0.17rem;
}
.content .right p.type{
width: 0.68rem;
height: 0.26rem;
border: 0.01rem solid #319DF5;
border-radius: 1rem;
font-size: 0.13rem;
color: #319DF5;
text-align: center;
line-height: 0.26rem;
position: absolute;
bottom: 0.12rem;
right: 0.07rem;
}
.content .right p.action{
border: 0.01rem solid #F59D18;
color: #F59D18;
}
.content .right p.actions{
border: 0.01rem solid #e6e6e6;
color: #bbbbbb;
}
/* end main */
</style>

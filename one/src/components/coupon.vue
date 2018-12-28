<template>
    <div class="mallcoupon">
        <div class="header">
            <div class="left"><img src="./images/return.png" alt=""></div>
            <div class="right">
                <p>优惠券</p>
                <p class="light">商城券</p>
                <p>活动券</p>
            </div>
        </div>
        <div class="nav">
            <ul class="lists">
                <li>
                <a href="###" class="active">未使用</a>
                </li>
                <li>
                <a href="###">已使用</a>
                </li>
                <li>
                <a href="###">已过期</a>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="maincontent">
            <div class="content">
            <div class="left">
            <p class="money">
            <span>￥</span>50
            </p>
            <p class="lowmoney">150元起用</p>
            </div>
            <div class="right">
            <div class="title">
                <h2>50元商城券</h2>
                <p>2017.01.01-2017.10.01</p>
                <img src="./images/pic_未使用@3x.png" alt="">
            </div>
            <div class="type">
                <p>指定商户 品牌 类型 商品</p>
                <p><img src="./images/icon_箭头_展开@3x.png" alt=""></p>
                </div>
            </div>
            </div>
            <div class="slide">
            <div class="title">
            <p>适用商户</p>
            <p>适用品牌</p>
            <p>适用类型</p>
            <p>适用商品</p>
            </div>
            <div class="msg">
            <p>北京天尧信息技术有限公司</p>
            <p>欧莱雅</p>
            <p>个人护理 身体护肤</p>
            <p>欧莱雅美丽精华演过美白精华素</p>
            </div>
            </div>
            </div>
                <div class="maincontent">
            <div class="content">
            <div class="left dark">
            <p class="money">
            <span>￥</span>50
            </p>
            <p class="lowmoney">150元起用</p>
            </div>
            <div class="right">
            <div class="title">
                <h2>50元商城券</h2>
                <p>2017.01.01-2017.10.01</p>
                <img src="./images/pic_已使用@3x.png" alt="">
            </div>
            <div class="type">
                <p>指定商户 品牌 类型 商品</p>
                <p><img src="./images/icon_箭头_收起@3x.png" alt=""></p>
                </div>
            </div>
            </div>
            <!-- <div class="slide">
            <div class="title">
            <p>适用商户</p>
            <p>适用品牌</p>
            <p>适用类型</p>
            <p>适用商品</p>
            </div>
            <div class="msg">
            <p>北京天尧信息技术有限公司</p>
            <p>欧莱雅</p>
            <p>个人护理 身体护肤</p>
            <p>欧莱雅美丽精华演过美白精华素</p>
            </div>
            </div> -->
            </div>
        </div>
        <NoCoupon v-show="false"></NoCoupon>
    </div>
</template>
<script>
import NoCoupon from './nocoupon';
export default {
    data(){
        return{

        }
    },
    components:{
       NoCoupon
    }
}
</script>
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
color: #8F8F8F;
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
.header .right{
 flex:1;
}
.header .right p{
float: left;
line-height: 0.24rem;
text-align: left;
margin-left: 0.28rem;
}
.header .right p:first-of-type{
 margin-left:0.39rem;   
}
.light{
color: #222222;
}
/* end header */
/* start nav */
.nav{
position: fixed;
top: 0.44rem;
left: 0;
width: 100%;
height: 0.4rem;
background: #fff;
box-shadow: 0 2px 4px 0 rgba(51,51,51,0.10);
z-index: 5;
}
.lists{
width: 100%;
display: flex;
}
.lists li{
 flex: 1;
 font-size:0.14rem; 
}
.lists li a{
 display: inline-block;
 color: #222222;
 height: 0.4rem;
 line-height: 0.4rem;
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
  width: 100%;
}
.main .content{
display: flex;
width: 100%;
box-shadow: 0 1px 4px 0 rgba(51,51,51,0.10);
}
.main .maincontent{
margin-bottom: 0.12rem;
}
.content .left{
flex:none;
width: 1rem;
height: 1rem;
background:#F59D18;
font-family: PingFangSC-Semibold;
font-size: 0.3rem;
color: #fff;
text-align: center;
letter-spacing: 0;
padding-top:0.2rem; 
}
.content .dark{
  background:#dbdbdb;  
}
.content .left p.money{
margin-bottom: 0.02rem;
}
.content .left p.money span:first-of-type{
  font-size:0.16rem; 
  line-height: 0.22rem;
}
.content .left p.lowmoney{
  font-size:0.12rem; 
}
.content .right{
flex:1;
background: #fff;
height: 1rem;
padding:0 0.09rem 0 0.18rem; 
display: flex;
flex-direction: column;
width: 100%;
}
.content .right .title{
flex: none;
position: relative;
height: 0.755rem;
border-bottom:1px dashed #e6e6e6;
}
.content .right .title h2{
font-size:0.15rem;
color: #666; 
font-weight: normal;
position: absolute;
top:0.08rem;
left: 0;
}
.content .right .title p{
font-size: 0.11rem;
color: #bbb;
position: absolute;
top:0.35rem;
left: 0;
}
.content .right .title img{
width: 0.621rem;
height: 0.621rem;
display: block;
position: absolute;
top:0.067rem;
right:0;
}
.content .right .type{
flex: 1;
font-size: 0.11rem;
color: #bbb;   
display: flex;
align-items: center;
}
.content .right .type p:nth-of-type(2){
margin-left: auto;
}
.content .right .type p:nth-of-type(2) img{
width: 0.1rem;
height: 0.06rem;
}
.main .slide{
height: 1.1rem;
width: 100%;
padding: 0.12rem;
background:#fff; 
margin-top: 0.01rem;
font-size: 0.12rem;
color: #bbb;
display: flex;
text-align: left;
} 
.main .slide .title{
flex: none;
width: 0.48rem;
line-height: 0.22rem;
}
.main .slide .msg{
line-height:0.22rem;
text-align: left;
margin-left: 0.51rem;
}
/* end main*/
</style>

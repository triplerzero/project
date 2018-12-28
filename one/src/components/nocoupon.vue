<template>
    <div>
    <div class="nocoupon">
      <img src="./images/暂无优惠券@2x.png" alt="">
      <p>暂无优惠券</p>
    </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nocoupon{
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
.nocoupon img{
width: 2.1rem;
height: 1.58rem;
display: block;
margin-bottom:0.08rem; 
}
.nocoupon p{
font-size: 0.16rem;
color: #666666;
line-height: 0.22rem;
}
</style>

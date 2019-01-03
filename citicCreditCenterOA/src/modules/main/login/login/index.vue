<template>
  <t-page>
    <div class="logo">
      <img src="@a/login/20150312-中信信用卡中心LOGO@2x.png">
    </div>
    <div class="login">
      <div class="username"><input type="text" placeholder="请输入手机号码"></div>
      <div class="password"><input type="password" placeholder="请输入密码"></div>
      <div class="vcode">
        <div class="vcodeText"><input type="text" placeholder="请输入短信验证码"></div>
        <div class="vcodeGet"><input type="button" value="获取验证码"></div>
      </div>
      <div class="loginBtn">
        <input type="button" value="登录" @click="handleLogin">
      </div>
    </div>
  </t-page>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleLogin: function() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  width: 5.84rem;
  height: 1.1rem;
  margin-top: 2.47rem;
  margin-left: 0.84rem;
  margin-right: 0.82rem;
  margin-bottom: 1.01rem;
>img{
  width: 100%;
  height: 100%;
}
}
.login{
  width: 6rem;
  margin: 0 auto;
  >div{
  width:5.96rem;
  height:0.84rem;
  border:0.02rem solid rgba(221,221,221,1);
  border-radius:0.44rem;
  display: flex;
  >input{
    width: 100%;
    margin-left: 1rem;
    font-size:0.32rem;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 0.84rem;
  }
  }
  .username,.password{
    margin-bottom: 0.3rem;
    background-repeat:  no-repeat;
    background-size: 0.4rem 0.4rem;
    background-position: 0.38rem center ;
  }
  .username{
    background-image: url(~@a/login/用户名@2x.png) ;
  }
  .password{
    background-image: url(~@a/login/密码@2x.png) ;
  }
  .vcode{
    margin-bottom: 0.6rem;
    .vcodeText{
      width: 3.60rem;
      height:0.88rem;
      font-size:0.16rem;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(204,204,204,1);
      >input{
        width: 3.07rem;
        margin-left: 0.55rem;
        font-size: 0.32rem;
        line-height: 0.84rem;
      }
    }
    .vcodeGet{
      width: 2.36rem;
      height: 0.84rem;
      background:rgba(215,0,8,1);
      border-radius:0 0.44rem 0.44rem 0;
      >input{
      width: 100%;
      font-size:0.32rem;
      font-weight:500;
      color:rgba(251,251,251,1);
      line-height: 0.84rem;
      }
    }
  }
  .loginBtn{
    background:rgba(215,0,8,1);
    border-radius:0.44rem;
    border:0 solid rgba(221,221,221,1);
    height: 0.88rem;
    width: 100%;
    >input{
      font-family:PingFang-SC-Bold;
      margin-left: 0;
      width: 100%;
      height: 100%;
      font-size:0.36rem;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
  }
}

</style>

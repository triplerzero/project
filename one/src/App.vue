<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}

html{
  font-size:50px; 
   font-family: PingFangSC-Regular;
}
body{
 background: #F6F6F6;
 font-family: PingFangSC-Regular;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

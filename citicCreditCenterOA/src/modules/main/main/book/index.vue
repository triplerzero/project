<template>
  <t-page :options="{nativeScroll: false}">
    <t-header><div slot="left"></div>全行通讯录</t-header>
    <div class="book">
      <div class="search">
        <div class="citicFont citic-sousuo icon"></div>
        <input type="text" placeholder="搜索" :value="search" @change="change">
      </div>
      <div>
        <t-cell class="cell" title="中信银行">
          <div slot="icon" class="logo">
            <img src="@a/main/logo2.png">
          </div>
          <div class="open arrow citicFont citic-xingzhuangkaobei2"></div>
        </t-cell>
        <div class="lv1" v-for="(l1, l1index) in lv1" :key="l1index">
          <t-cell class="cell" :title="l1.name" @click="l1Click(l1)" is-link>
            <div class="arrow citicFont citic-xingzhuangkaobei2" :class="{'open': l1.open}"></div>
          </t-cell>
          <div v-if="l1.open" class="lv2" v-for="(l2, l2index) in l1.lv2" :key="l2index">
            <t-cell class="cell" :title="l2.name" is-link @click="l1Click(l2)">
              <div class="arrow citicFont citic-xingzhuangkaobei2" :class="{'open': l2.open}"></div>
            </t-cell>
            <div v-if="l2.open" class="lv3" v-for="(l3, l3index) in l2.lv3" :key="l3index">
              <t-cell class="cell" :title="l3.name" is-link @click="goDetails(l3)">
                <div class="name" slot="icon">{{ l3.name | shortName }}</div>
                <div class="arrow citicFont citic-xingzhuangkaobei2"></div>
              </t-cell>
            </div>
          </div>
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['search', 'lv1'])
  },
  methods: {
    ...mapMutations(['storeSearch']),
    l1Click(e) {
      e.open = !e.open
    },
    change(e) {
      this.storeSearch(e.target.value)
    },
    goDetails(item) {
      this.$router.push({
        path: '/main/details/details',
        query: item
      })
    }
  },
  filters: {
    shortName(e) {
      return e[0]
    }
  },
}
</script>

<style>
.book .T_cell_right .T_cell_icon{
  display: none;
}
.book .T_cell_body::after{
  content: none;
}
.book .T_cell_icon{
  margin-right: .1rem;
  margin-left: 0;
}
.book .T_cell_title_h1{
  color: #333;
}
.book .lv2 .T_cell_body{
  margin-left: .79rem;
}

.book .lv3 .T_cell_body{
  margin-left: 1.65rem;
}
</style>

<style lang="scss" scoped>
@import '@s/mixin';
.name{
  width: .56rem;
  height: .56rem;
  border-radius: 100%;
  background-color: #9ccc49;
  color: white;
  @include allCenter;
  margin-right: .1rem;
}
.cell{
  position: relative;
}
.cell::after{
  content: "";
  width: 100%;
  height: 1px;
  background-color: #ebecef;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.arrow{
  font-size: .3rem;
  transform: rotate(0deg);
  transition: all .2s;
}
.open{
  transform: rotate(90deg);
}
.logo{
  width: .6rem;
  >img{
    width: 100%;
    display: block;
  }
}
.search{
  width: 6.9rem;
  height: .8rem;
  margin: .16rem auto;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: .1rem;
  >input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: .16rem;
  }
  >.icon{
    color: #999;
    margin-left: .18rem;
    font-size: .4rem;
  }
}
</style>

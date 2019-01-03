<template>
  <t-page>
    <t-header slot="top">
      <div>代理人详情</div>
    </t-header>
    <div>
      <t-detail name="代理人" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ name }}</span>
      </t-detail>
      <t-detail name="授权类型" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ type }}</span>
      </t-detail>
      <t-detail name="开始时间" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ starTime }}</span>
      </t-detail>
      <t-detail name="结束时间" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ endTime }}</span>
      </t-detail>
      <t-detail name="创建时间" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ creatTime }}</span>
      </t-detail>
      <t-detail name="流程名称" :imgsrc="require('@/assets/main/形 拷贝 8.png')">
        <span class="differ">{{ process }}</span>
      </t-detail>
    </div>
    <t-bottom slot="bottom">
      <button class="btn" @click="leftClick()">删除代理人</button>
    </t-bottom>
  </t-page>
</template>
<script>
import tDetail from "../component/detail"
export default {
  data() {
    return {
      name: '',
      type: '',
    }
  },
  components: {
    tDetail
  },
  methods: {
    leftClick() {
      this.$dialog({
        msg: '确定要删除吗',
        okButton: '确认',
        cancelButton: '取消'
      }).then((a) => {
        console.log(a)
      })
    }
  },
  mounted() {
    console.log(this.$route.query)
    this.name = this.$route.query.name
    this.type = this.$route.query.info
    this.id = this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin: 0 0.3rem 0.51rem 0.3rem;
  width: 6.9rem;
  height: 0.88rem;
  line-height: 0.88rem;
  border-radius: 0.44rem;
  border: 0.01rem solid rgba(215, 0, 8, 1);
  color: rgba(215, 0, 8, 1);
  font-weight: 500;
  font-size: 0.34rem;
  text-align: center;
  background: #fff;
}
.differ {
  display: inline-block;
  margin: 0.34rem 0.22rem 0.35rem 0;
  color: #333;
  font-size: 0.32rem;
}
</style>

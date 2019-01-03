<template>
  <t-page :options="{nativeScroll: false}">
    <t-header slot="top">正文及附件</t-header>
    <div class="content">
      <div class="con">
        <div class="classify">发文正文</div>
        <div class="file" v-for="(item,index) in fileList.officialText" :key="index">
          <div :class="fileIcon(item)"></div>
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="classify">发文附件</div>
        <div class="file" v-for="(item,index) in fileList.officialAccessory" :key="index">
          <div :class="fileIcon(item)"></div>
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="classify">其他附件</div>
        <div class="file" v-for="(item,index) in fileList.otherAccessory" :key="index">
          <div :class="fileIcon(item)"></div>
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="classify">正式文件</div>
        <div class="file" v-for="(item,index) in fileList.officialFile" :key="index">
          <div :class="fileIcon(item)"></div>
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
export default {
  data() {
    return {
      fileList: {
        officialText: [],
        officialAccessory: [],
        otherAccessory: [],
        officialFile: []
      }
    }
  },
  mounted() {
    this.fileList = {
      officialText: [
        {
          name: "发文正文.doc",
          href: ""
        }
      ],
      officialAccessory: [
        {
          name: "附件1.ppt",
          href: ""
        },
        {
          name: "附件2.ppt",
          href: ""
        },
        {
          name: "附件3.ppt",
          href: ""
        }
      ],
      otherAccessory: [
        {
          name: "附件1.ppt",
          href: ""
        },
        {
          name: "附件1.xls",
          href: ""
        }
      ],
      officialFile: [
        {
          name: "名字会很长很长会很长很长会很长很长会很长很长附件1.ppt",
          href: ""
        }
      ]
    }
  },
  methods: {
    fileIcon(item) {
      if (item.name.endsWith("ppt")) {
        return "icon citicFont citic-xingzhuang8 two"
      }
      if (item.name.endsWith("doc")) {
        return "icon citicFont citic-WORD one"
      }
      if (item.name.endsWith("xls")) {
        return "icon citicFont citic-zu three"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 7.5rem;
  height: auto;
  background: rgba(255, 255, 255, 1);
}
.con {
  width: 6.9rem;
  margin: 0 auto;
  height: auto;
}
.classify {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.32rem;
  color: #999999;
}
.file {
  padding-top: 0.27rem;
  padding-bottom: 0.33rem;
  border-radius: 0.08rem;
  line-height: 0.4rem;
  border: 0.01rem solid rgba(234, 234, 234, 1);
  box-sizing: border-box;
  padding-left: 0.22rem;
  display: flex;
  background: rgba(250, 250, 250, 1);
  margin-bottom: 0.1rem;
  .file:last-child {
    margin-bottom: 0;
  }
  > .title {
    font-size: 0.3rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: #333333;
  }
  > .icon {
    font-size: 0.4rem;
    margin-right: 0.2rem;
  }
  > .one {
    color: #5587e0;
  }
  > .two {
    color: #ff7736;
  }
  > .three {
    color: #79b93f;
  }
}
</style>

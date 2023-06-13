<template>
  <div class="big">
      <div class="up">

          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="horizontal" :router="true">
              <el-menu-item index="/cms_subject_category">商品管理</el-menu-item>
              <el-menu-item index="/cms_subject">专题管理</el-menu-item>
              <el-menu-item index="/cms_subject_comment">主题评论管理</el-menu-item>
              <el-menu-item index="/cms_subject_product_relation">专题分类</el-menu-item>
          </el-menu>
      </div>

      <div class="down">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
      
      }
  },
  methods: {
  },
}
</script>
<style  scoped>
.up {
  width: 100%;
  height: 20%;
  
}

.down {
  width: 100%;
  height: 800%;
  overflow-y: auto;
}

.big {
  width: 100%;
  height: 100%;
  padding: 0px;
}
</style>

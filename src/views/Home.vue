<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-15 12:41:02
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-16 19:55:14
 * @FilePath: \mall-gitee\src\views\Home.vue
-->
<template>
  <el-container class="home">
    <!-- 头部 -->
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between" align="middle">
        <el-col>
          <el-row type="flex" align="middle" class="row-bg">
            <img class="logo" src="@/assets/logo.png" />
            <span>商城管理系统</span>
          </el-row>
        </el-col>
        <!-- <el-col :span="1"></el-col> -->
        <el-button type="info">退出</el-button>
      </el-row>
    </el-header>

    <el-container>
      <!-- 导航 -->
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <!-- 内容 -->
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
// container
.home {
  height: 100vh;

  // header
  .el-header {
    background-color: #666;

    .row-bg {
      height: 100%;
      padding: 0;
      margin: 0;
      color: #fff;

      .el-col {
        height: 100%;
        font-size: 20px;

        .logo {
          margin-right: 18px;
          height: 50px;
        }
      }
    }
  }

  // aside
  .el-aside {
    line-height: 200px;
    background-color: #333744;
  }

  // main
  .el-main {
    background-color: #eaedf1;
  }
}
</style>

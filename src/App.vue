<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-14 17:41:47
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-24 12:13:17
 * @FilePath: \mall-gitee\src\App.vue
-->
<template>
  <div id="app">
    <!-- 路由 -->
    <router-view />
  </div>
</template>

<style lang="scss">
// 引入样式
@import 'assets/normalize.css';
@import 'assets/index.scss';
@import 'assets/common.scss';

#app {
  font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    '\5B8B\4F53', sans-serif;
  color: #333;
  // width: 100%;
  height: 100%;
  min-width: 1370px;
}
</style>

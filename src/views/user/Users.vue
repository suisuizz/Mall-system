<!--
 * @Descripttion: 用户管理页面
 * @Author: SUI
 * @Date: 2021-08-17 23:41:51
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-18 09:21:27
 * @FilePath: \mall-gitee\src\views\user\Users.vue
-->
<template>
  <div>
    <!-- 面包屑导航 -->
    <Bread :title="breadText"></Bread>
    用户列表页面
  </div>
</template>

<script>
// 引入面包屑
import Bread from '@/components/common/Bread'
export default {
  name: 'Users',
  // 引入模板
  components: {
    Bread
  },

  data() {
    return {
      breadText: '用户管理 / 用户列表'
    }
  }
}
</script>

<style lang="scss" scoped></style>

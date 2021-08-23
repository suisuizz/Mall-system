<!--
 * @Descripttion: 权限列表
 * @Author: SUI
 * @Date: 2021-08-23 23:54:53
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-24 00:18:16
 * @FilePath: \mall-system-gitee\src\views\power\Rights.vue
-->
<template>
  <div>
    <!-- 面包屑导航 -->
    <Bread :title="breadTitle"></Bread>

    <!-- 内容展示卡片 -->
    <el-card class="box-card"> </el-card>
  </div>
</template>
<script>
// 引入面包屑
import Bread from '@/components/common/Bread'
export default {
  name: 'Roles',
  components: {
    Bread
  },
  data() {
    return {
      // 面包屑标题
      breadTitle: {
        one: '权限管理',
        two: '权限列表'
      }
    }
  },

  created() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>

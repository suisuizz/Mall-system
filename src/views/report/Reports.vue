<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-24 01:17:19
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-24 01:18:23
 * @FilePath: \mall-system-gitee\src\views\report\Reports.vue
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
  name: 'Reports',
  components: {
    Bread
  },
  data() {
    return {
      // 面包屑标题
      breadTitle: {
        one: '数据统计',
        two: '数据报表'
      }
    }
  },

  created() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>

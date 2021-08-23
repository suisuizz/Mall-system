<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-24 01:12:12
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-24 01:12:13
 * @FilePath: \mall-system-gitee\src\views\goods\Params.vue
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
  name: 'Params',
  components: {
    Bread
  },
  data() {
    return {
      // 面包屑标题
      breadTitle: {
        one: '商品管理',
        two: '参数列表'
      }
    }
  },

  created() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>

<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-24 01:15:09
 * @LastEditors: SUI
 * @LastEditTime: 2021-09-05 23:11:34
 * @FilePath: \mall-system-gitee\src\views\goods\Add.vue
-->
<template>
  <div>
    <!-- 面包屑导航 -->
    <Bread :title="breadTitle"></Bread>

    <!-- 内容展示卡片 -->
    <el-card class="box-card">
      <!-- 提示信息 -->
      <el-alert title="添加商品信息" type="info" center :closable="false" show-icon> </el-alert>

      <!-- 
        步骤条
        space   每个 step 的间距，不填写将自适应间距。支持百分比。
        active  设置当前激活步骤
       -->
      <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- tab标签 -->
      <el-tabs v-model="activeIndex" :tab-position="'left'" :before-leave="beforeTabsLeave" @tab-click="tabClick">
        <el-tab-pane label="基本信息" name="0">用户管理</el-tab-pane>
        <el-tab-pane label="商品参数" name="1">配置管理</el-tab-pane>
        <el-tab-pane label="商品属性" name="2">角色管理</el-tab-pane>
        <el-tab-pane label="商品图片" name="3">定时任务补偿</el-tab-pane>
        <el-tab-pane label="商品内容" name="4">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
// 引入面包屑
import Bread from '@/components/common/Bread'
export default {
  name: 'Add',
  components: {
    Bread
  },
  data() {
    return {
      // 面包屑标题
      breadTitle: {
        one: '商品列表',
        two: '添加商品'
      },

      // 步骤条当前位置
      activeIndex: '0'
    }
  },

  created() {},

  methods: {
    //点击tab切换时触发,未满足条件不发生跳转
    beforeTabsLeave(activeName, oldActiveName) {
      console.log('当前' + activeName)
      console.log('之前' + oldActiveName)
      // if (oldActiveName === '0' && this.addForm.goods_cat.length !== 3) {
      //   this.$message.error('请先选择商品分类')
      //   return false
      // }
    },

    tabClick() {
      // console.log()
    }
  }
}
</script>

<style lang="scss" scoped></style>

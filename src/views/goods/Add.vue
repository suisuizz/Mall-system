<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-24 01:15:09
 * @LastEditors: SUI
 * @LastEditTime: 2021-09-06 23:51:22
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

      <!-- form 表单嵌套 tab标签 一起提交 -->
      <el-form ref="addFormRef" :model="addForm" :rules="rules" label-position="top">
        <el-tabs v-model="activeIndex" :tab-position="'left'" :before-leave="beforeTabsLeave" @tab-click="tabClick">
          <el-tab-pane label="基本信息" name="0">
            <el-form-item prop="goods_name" label="商品名称">
              <el-input v-model="addForm.goods_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="goods_price" label="商品价格">
              <el-input v-model="addForm.goods_price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="goods_weight" label="商品重量">
              <el-input v-model="addForm.goods_weight" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="goods_number" label="商品数量">
              <el-input v-model="addForm.goods_number" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="goods_cat" label="选择商品分类">
              <!-- options用来指定数据源 -->
              <!-- props用来指定配置对象 -->
              <el-cascader v-model="addForm.goods_cat" :options="cateList" :props="cateProps" @change="handleChange"></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">配置管理</el-tab-pane>
          <el-tab-pane label="商品属性" name="2">角色管理</el-tab-pane>
          <el-tab-pane label="商品图片" name="3">定时任务补偿</el-tab-pane>
          <el-tab-pane label="商品内容" name="4">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-form>
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
      activeIndex: '0',
      // 添加表单的数据对象
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_number: 0,
        goods_weight: 0,
        // 商品所属的分类数组
        goods_cat: [],
        // 上传图片的临时路径
        pics: [],
        // 商品的详情描述
        goods_introduce: '',
        // 商品的参数，包含静态参数和动态属性
        attrs: []
      },
      // 验证规则
      rules: {
        goods_name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        goods_price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        goods_number: [{ required: true, message: '请输入商品数量', trigger: 'blur' }],
        goods_weight: [{ required: true, message: '请输入商品重量', trigger: 'blur' }],
        goods_cat: [{ required: true, message: '请选择商品分类', trigger: 'blur' }]
      },

      // 商品分类列表
      cateList: [],
      // 配置
      cateProps: {
        expandTrigger: 'hover',
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      }
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
    },

    handleChange() {
      // console.log()
    }
  }
}
</script>

<style lang="scss" scoped></style>

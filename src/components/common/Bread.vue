<!--
 * @Descripttion: 面包屑页面
 * @Author: SUI
 * @Date: 2021-08-15 09:23:13
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-18 09:20:26
 * @FilePath: \mall-gitee\src\components\common\Bread.vue
-->
<template>
  <div class="">
    <div>首页 / {{ titleText }}</div>
  </div>
</template>

<script>
export default {
  name: 'Bread',

  // 父子传值
  props: {
    title: {
      default: true
    }
  },

  data() {
    return {
      titleText: this.title
    }
  },

  // 监听值的改变
  watch: {
    title(newVal) {
      this.titleText = newVal
    }
  }
}
</script>

<style lang="scss" scoped></style>

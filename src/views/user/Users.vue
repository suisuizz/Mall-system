<!--
 * @Descripttion: 用户管理页面
 * @Author: SUI
 * @Date: 2021-08-17 23:41:51
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-19 22:32:38
 * @FilePath: \mall-system-gitee\src\views\user\Users.vue
-->
<template>
  <div>
    <!-- 面包屑导航 -->
    <Bread :title="breadTitle"></Bread>

    <!-- 内容区域卡片 -->
    <el-card class="box-card">
      <!-- 搜索和添加 -->
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
            @clear="getUserLIst"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserLIst"
            ></el-button>
          </el-input>
        </el-col>
        <!-- 添加用户 -->
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>

      <!-- 表格数据 -->
      <el-table :data="usersList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态" prop="mg_state">
          <template slot-scope="scope">
            <el-switch v-model="scope.mg_state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalpage"
      >
      </el-pagination>
    </el-card>
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
      // 面包屑标题
      breadTitle: {
        one: '用户管理',
        two: '用户列表'
      },

      // 获取请求参数
      queryInfo: {
        // 查询参数
        query: '',
        // 当前页数
        pagenum: 1,
        // 每页显示条数
        pagesize: 5
      },

      // 用户数据
      usersList: [],

      // 总记录数
      totalpage: 0,

      // 控制弹框显示
      dialogVisible: false
    }
  },

  created() {
    // 获取用户列表
    this.getUserLIst()
  },

  methods: {
    // 获取用户列表
    getUserLIst() {
      let that = this
      that.$api.get('users', that.queryInfo, (res) => {
        if (res.meta.status !== 200) return that.$message.error(res.meta.msg)
        that.$message.success('获取用户数据成功')
        console.log(res.data)
        that.usersList = res.data.users
        that.totalpage = res.data.total
        that.queryInfo.pagenum = res.data.pagenum
      })
    },

    // 监听分页 改变条数
    handleSizeChange(pagesize) {
      this.queryInfo.pagesize = pagesize
      this.getUserLIst()
    },

    // 监听分页 改变页数
    handleCurrentChange(pagenum) {
      this.queryInfo.pagenum = pagenum
      this.getUserLIst()
    },

    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 15px;
}
</style>

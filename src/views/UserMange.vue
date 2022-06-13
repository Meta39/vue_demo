<template>
  <div>
    <div class="search">
      <div class="search_son">
        <span class="search_son_span">模糊查询：</span>
        <el-input v-model="input" placeholder="查询账号/用户名" clearable minlength="1" maxlength="50" show-word-limit />
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
      <el-button type="primary">新增</el-button>
    </div>
    <div class="content2">
      <el-table :data="tableData" max-height="700" :border="true" highlight-current-row table-layout="auto">
        <el-table-column type="selection" width="55" show-overflow-tooltip />
        <el-table-column fixed prop="id" label="账号" show-overflow-tooltip width="60" />
        <el-table-column prop="name" label="用户名" show-overflow-tooltip />
        <el-table-column prop="phone" label="手机号" show-overflow-tooltip />
        <el-table-column prop="eMail" label="邮箱地址" show-overflow-tooltip />
        <el-table-column prop="creator" label="创建人" show-overflow-tooltip />
        <el-table-column prop="remark" label="备注" show-overflow-tooltip />
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip />
        <el-table-column prop="lastLoginTime" label="最后登录时间" show-overflow-tooltip />
        <el-table-column fixed="right" prop="operate" label="操作" width="250">
          <template #default="scope">
            <el-button size="small" type="info">禁用</el-button>
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageHelper">
      <el-button size="small" type="danger" @click="">删除所选行</el-button>
      <div class="demo-pagination-block">
        <el-pagination small prev-text="上一页" next-text="下一页" v-model:currentPage="currentPage"
          v-model:page-size="pageSize" :page-sizes="[10, 20, 50, 100]" :small="small"
          layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { userSelectPage } from "../api/user";
const input = ref('')
//获取用户分页数据
const getData = async () => {
  const res = await userSelectPage();
  console.log('res>>>', res.data);
};
getData();

const tableData = [
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  },
  {
    id: 1,
    name: 'Tom',
    phone: 'California',
    eMail: 'Los Angeles',
    creator: 'No. 189, Grove St, Los Angeles',
    remark: 'CA 90036',
    createTime: 'No. 189, Grove St, Los Angeles',
    lastLoginTime: 'CA 90036',
  }
]
const handleEdit = (index: number, row: null) => {
  console.log(index, row)
}
const handleDelete = (index: number, row) => {
  console.log(index, row.id)
}

//分页
const total = ref(500)
const small = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style>
@import "../assets/css/content.css";
</style>

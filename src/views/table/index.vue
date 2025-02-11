<template>
  <el-card header="表格组件" shadow="never" style="border: none">
    <el-table
      :data="tableData"
      :border="true"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="56"
        align="center"
        fixed="left"
      />
      <el-table-column type="index" width="56" align="center" fixed="left" />
      <el-table-column
        prop="username"
        label="用户账号"
        min-width="120"
        align="center"
      />
      <el-table-column
        prop="nickname"
        label="用户名"
        min-width="120"
        align="center"
      />
      <el-table-column
        prop="organizationName"
        label="组织机构"
        min-width="140"
        align="center"
      />
      <el-table-column prop="sexName" label="性别" width="100" align="center" />
      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="200"
        align="center"
      />
      <el-table-column prop="status" label="状态" width="100" align="center">
        <template #default="{ row }">
          <el-tag
            v-if="row.status === 0"
            type="primary"
            size="small"
            disable-transitions
          >
            正常
          </el-tag>
          <el-tag v-else type="danger" size="small" disable-transitions>
            冻结
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center" fixed="right">
        <el-link :icon="Edit" type="primary" :underline="false">
          <span style="transform: translateY(-1px)">&nbsp;修改</span>
        </el-link>
        <el-divider direction="vertical" style="margin: 0 12px" />
        <el-link :icon="Delete" type="danger" :underline="false">
          <span style="transform: translateY(-1px)">&nbsp;删除</span>
        </el-link>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
  import { ref } from 'vue';
  import { Edit, Delete } from '@element-plus/icons-vue';

  const tableData = ref([
    {
      userId: 40,
      username: 'admin',
      nickname: '管理员',
      status: 0,
      createTime: '2020-01-13 14:43:52',
      organizationName: 'XXX公司',
      sexName: '女',
      roles: [{ roleId: 10, roleName: '管理员', comments: '管理员' }]
    },
    {
      userId: 41,
      username: 'user01',
      nickname: '用户一',
      status: 0,
      createTime: '2020-09-15 17:49:37',
      organizationName: 'XXX公司',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 42,
      username: 'user02',
      nickname: '用户二',
      status: 0,
      createTime: '2020-09-15 17:50:20',
      organizationName: 'XXX公司',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 43,
      username: 'user03',
      nickname: '用户三',
      status: 0,
      createTime: '2020-09-15 17:50:51',
      organizationName: 'XXX公司',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 44,
      username: 'user04',
      nickname: '用户四',
      status: 0,
      createTime: '2020-09-15 17:51:50',
      organizationName: '研发部',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 45,
      username: 'user05',
      nickname: '用户五',
      status: 0,
      createTime: '2020-09-15 17:52:22',
      organizationName: '研发部',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 46,
      username: 'user06',
      nickname: '用户六',
      status: 0,
      createTime: '2020-09-15 17:53:31',
      organizationName: '研发部',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 47,
      username: 'user07',
      nickname: '用户七',
      status: 0,
      createTime: '2020-10-20 23:28:40',
      organizationName: '研发一组',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 48,
      username: 'user08',
      nickname: '用户八',
      status: 1,
      createTime: '2020-10-20 23:29:03',
      organizationName: '研发一组',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 49,
      username: 'user09',
      nickname: '用户九',
      status: 0,
      createTime: '2020-10-20 23:29:30',
      organizationName: '研发二组',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 50,
      username: 'user10',
      nickname: '用户十',
      status: 1,
      createTime: '2020-10-20 23:29:55',
      organizationName: '研发二组',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 51,
      username: 'user11',
      nickname: '用户十一',
      status: 0,
      createTime: '2020-10-20 23:30:28',
      organizationName: '研发三组',
      sexName: '男',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    },
    {
      userId: 52,
      username: 'user12',
      nickname: '用户十二',
      status: 0,
      createTime: '2020-10-20 23:30:53',
      organizationName: '研发四组',
      sexName: '女',
      roles: [{ roleId: 11, roleName: '普通用户' }]
    }
  ]);
</script>

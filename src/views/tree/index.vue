<template>
  <el-card header="树组件" shadow="always" style="border: none">
    <el-tree
      show-checkbox
      :data="menuData"
      node-key="menuId"
      default-expand-all
      :props="{ label: 'title' }"
    >
      <template #default="scope">
        <div>
          <el-icon
            v-if="scope.data.icon"
            :size="16"
            style="margin-right: 6px; vertical-align: -3px"
          >
            <component :is="scope.data.icon" />
          </el-icon>
          <span>{{ scope.data.title }}</span>
        </div>
      </template>
    </el-tree>
  </el-card>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    House,
    Monitor,
    DataAnalysis,
    Odometer,
    Setting,
    User,
    Postcard,
    Tickets,
    Document,
    Memo,
    SetUp,
    Files,
    Link
  } from '@element-plus/icons-vue';

  defineOptions({
    components: {
      House,
      Monitor,
      DataAnalysis,
      Odometer,
      Setting,
      User,
      Postcard,
      Tickets,
      Document,
      Memo,
      SetUp,
      Files,
      Link
    }
  });

  const menuData = ref([
    {
      menuId: 336,
      title: 'Dashboard',
      icon: 'House',
      children: [
        {
          menuId: 337,
          title: '工作台',
          icon: 'Monitor'
        },
        {
          menuId: 338,
          title: '分析页',
          icon: 'DataAnalysis'
        },
        {
          menuId: 339,
          title: '监控页',
          icon: 'Odometer'
        }
      ]
    },
    {
      menuId: 301,
      title: '系统管理',
      icon: 'Setting',
      children: [
        {
          menuId: 302,
          title: '用户管理',
          icon: 'User',
          children: [
            {
              menuId: 303,
              title: '查询用户'
            },
            {
              menuId: 304,
              title: '添加用户'
            },
            {
              menuId: 305,
              title: '修改用户'
            },
            {
              menuId: 306,
              title: '删除用户'
            }
          ]
        },
        {
          menuId: 307,
          title: '角色管理',
          icon: 'Postcard',
          children: [
            {
              menuId: 308,
              title: '查询角色'
            },
            {
              menuId: 309,
              title: '添加角色'
            },
            {
              menuId: 310,
              title: '修改角色'
            },
            {
              menuId: 311,
              title: '删除角色'
            }
          ]
        },
        {
          menuId: 312,
          title: '菜单管理',
          icon: 'Tickets',
          children: [
            {
              menuId: 313,
              title: '查询菜单'
            },
            {
              menuId: 314,
              title: '添加菜单'
            },
            {
              menuId: 315,
              title: '修改菜单'
            },
            {
              menuId: 316,
              title: '删除菜单'
            }
          ]
        }
      ]
    },
    {
      menuId: 340,
      title: '表单页面',
      icon: 'Document',
      children: [
        {
          menuId: 341,
          title: '基础表单',
          icon: 'Document'
        },
        {
          menuId: 342,
          title: '复杂表单',
          icon: 'Memo'
        },
        {
          menuId: 353,
          title: '表单构建',
          icon: 'SetUp'
        }
      ]
    },
    {
      menuId: 344,
      title: '列表页面',
      icon: 'Files',
      children: [
        {
          menuId: 345,
          title: '基础列表',
          icon: 'Link'
        },
        {
          menuId: 346,
          title: '复杂列表',
          icon: 'Link'
        },
        {
          menuId: 347,
          title: '卡片列表',
          icon: 'Link'
        }
      ]
    }
  ]);
</script>

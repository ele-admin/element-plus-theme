<template>
  <el-config-provider :locale="zh_CN">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import zh_CN from 'element-plus/es/locale/lang/zh-cn';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';

  dayjs.locale('zh-cn');
</script>
